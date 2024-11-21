<template>
  <div id="app">
    <PosterBg :poster="posterBg" />
    <NotificationToast class="notification" />
    <MoviesHeader />
    <ListMovies :list="getMoviesList" @onMouseOverItem="getPosterBg" />
    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="getId250Length"
      @changePage="onChangePage"
    />
    <MoviesLoader />
  </div>
</template>

<script>
import NotificationToast from "./components/NotificationToast";
import MoviesHeader from "./components/MoviesHeader";
import ListMovies from "./components/ListMovies";
import PosterBg from "./components/PosterBg";
import MoviesPagination from "./components/MoviesPagination";
import MoviesLoader from "./components/MoviesLoader";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    ListMovies,
    PosterBg,
    MoviesPagination,
    MoviesLoader,
    MoviesHeader,
    NotificationToast,
  },
  data: () => ({
    posterBg: "",
  }),
  computed: {
    ...mapGetters("moviesStore", [
      "getMoviesList",
      "moviesPerPage",
      "currentPage",
      "getId250Length",
    ]),
  },
  watch: {
    "$route.query": {
      handler: "onPageQueryChange",
      immediate: true,
      deep: true,
    },
  },
  methods: {
    ...mapActions("moviesStore", ["changeCurrentPage"]),
    onPageQueryChange({ page = 1 }) {
      this.changeCurrentPage(Number(page));
    },
    getPosterBg(poster) {
      this.posterBg = poster;
    },
    onChangePage(page) {
      this.$router.push({ query: { page } });
    },
  },
};
</script>

<style>
#app {
  font-family: Arial, Helvetica;
  position: relative;
}
</style>
