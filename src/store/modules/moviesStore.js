import axios from "@/plugins/axios";
import mutations from "@/store/mutations";
import IDs from "@/store/mock/imdb_top250";

const { SET_MOVIES, CURRENT_PAGE, REMOVE_MOVIE, TOGGLE_SEARCH } = mutations;

function serializeMovies(movies) {
  return movies.reduce((acc, movie) => {
    acc[movie.imdbID] = movie;
    return acc;
  }, {});
}

const moviesStore = {
  namespaced: true,
  state: {
    id250: IDs,
    moviesPerPage: 12,
    currentPage: 1,
    movies: {},
    toggleSearch: false,
  },
  getters: {
    slicedIDs:
      ({ id250 }) =>
      (from, to) =>
        id250.slice(from, to),
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
    currentPage: ({ currentPage }) => currentPage,
    getMoviesList: ({ movies }) => movies,
    getId250Length: ({ id250 }) => id250.length,
    getToggleSearch: ({ toggleSearch }) => toggleSearch,
  },
  mutations: {
    [SET_MOVIES](store, movies) {
      store.movies = movies;
    },
    [CURRENT_PAGE](store, page) {
      store.currentPage = page;
    },
    [REMOVE_MOVIE](store, index) {
      store.id250.splice(index, 1);
    },
    [TOGGLE_SEARCH](store, boolean) {
      store.toggleSearch = boolean;
    },
  },
  actions: {
    // loadMovies: {
    //   handler({ dispatch }) {
    //     dispatch("fetchMovies");
    //   },
    //   root: true,
    // },
    async fetchMovies({ getters, commit, dispatch, state }) {
      try {
        dispatch("changeLoader", true, { root: true });
        const { slicedIDs, moviesPerPage, currentPage } = getters;
        const from = currentPage * moviesPerPage - moviesPerPage;
        const to = currentPage * moviesPerPage;
        const moviesToFetch = slicedIDs(from, to);
        const requests = moviesToFetch.map((id) => axios.get(`/?i=${id}`));
        const response = await Promise.all(requests);
        const movies = serializeMovies(response);
        console.log(movies);
        commit("SET_MOVIES", movies);
        state.toggleSearch = false;
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("changeLoader", false, { root: true });
      }
    },
    changeCurrentPage({ commit, dispatch }, page) {
      commit("CURRENT_PAGE", page);
      dispatch("fetchMovies");
    },
    removeMovie({ commit, state, dispatch }, id) {
      const index = state.id250.indexOf(id);
      if (index !== -1) {
        commit("REMOVE_MOVIE", index);
        dispatch("fetchMovies");
      }
    },
    async searchMovies({ commit, dispatch, state }, query) {
      try {
        dispatch("changeLoader", true, { root: true });
        const response = await axios.get(`/?s=${query}`);
        if (response.Error) {
          throw new Error(response.Error);
        }
        const movies = serializeMovies(response.Search);
        console.log(movies);
        commit("SET_MOVIES", movies);
        state.toggleSearch = true;
      } catch (err) {
        console.log(err.message);
        dispatch(
          "pushMessageNotification",
          {
            msg: err.message,
            variant: "danger",
            title: "Error",
          },
          { root: true }
        );
      } finally {
        dispatch("changeLoader", false, { root: true });
      }
    },
    toggleSearch({ commit }, boolean) {
      commit("TOGGLE_SEARCH", boolean);
    },
  },
};

export default moviesStore;
