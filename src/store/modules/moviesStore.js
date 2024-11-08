import axios from "@/plugins/axios";
import mutations from "@/store/mutations";
import IDs from "@/store/mock/imdb_top250";

const { SET_MOVIES } = mutations;

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
  },
  getters: {
    slicedIDs:
      ({ id250 }) =>
      (from, to) =>
        id250.slice(from, to),
    moviesPerPage: ({ moviesPerPage }) => moviesPerPage,
    currentPage: ({ currentPage }) => currentPage,
    getMovies: ({ movies }) => movies,
  },
  mutations: {
    [SET_MOVIES](store, movies) {
      store.movies = movies;
    },
  },
  actions: {
    loadMovies: {
      handler({ dispatch }) {
        dispatch("fetchMovies");
      },
      root: true,
    },
    async fetchMovies({ getters, commit }) {
      try {
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
      }
    },
  },
};

export default moviesStore;
