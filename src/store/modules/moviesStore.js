import axios from "@/plugins/axios";
import mutations from "@/store/mutations";
import IDs from "@/store/mock/imdb_top250";

const { SET_MOVIES, CURRENT_PAGE, TOGGLE_LOADER } = mutations;

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
    toggleLoader: "none",
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
    toggleLoader: ({ toggleLoader }) => toggleLoader,
  },
  mutations: {
    [SET_MOVIES](store, movies) {
      store.movies = movies;
    },
    [CURRENT_PAGE](store, page) {
      store.currentPage = page;
    },
    [TOGGLE_LOADER](store, value) {
      store.toggleLoader = value;
    },
  },
  actions: {
    // loadMovies: {
    //   handler({ dispatch }) {
    //     dispatch("fetchMovies");
    //   },
    //   root: true,
    // },
    async fetchMovies({ getters, commit, dispatch }) {
      try {
        dispatch("changeToggleLoader", "flex");
        const { slicedIDs, moviesPerPage, currentPage } = getters;
        const from = currentPage * moviesPerPage - moviesPerPage;
        const to = currentPage * moviesPerPage;
        const moviesToFetch = slicedIDs(from, to);
        const requests = moviesToFetch.map((id) => axios.get(`/?i=${id}`));
        const response = await Promise.all(requests);
        const movies = serializeMovies(response);
        console.log(movies);
        commit("SET_MOVIES", movies);
      } catch (err) {
        console.log(err);
      } finally {
        dispatch("changeToggleLoader", "none");
      }
    },
    changeCurrentPage({ commit, dispatch }, page) {
      commit("CURRENT_PAGE", page);
      dispatch("fetchMovies");
    },
    changeToggleLoader({ commit }, value) {
      commit("TOGGLE_LOADER", value);
    },
  },
};

export default moviesStore;
