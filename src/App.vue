<template>
  <div id="app">
    <PosterBg :poster="posterBg" />
    <ListMovies :list="getMoviesList" @onMouseOverItem="getPosterBg" />
    <MoviesPagination />
  </div>
</template>

<script>
import ListMovies from "./components/ListMovies";
import PosterBg from "./components/PosterBg";
import MoviesPagination from "./components/MoviesPagination";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    ListMovies,
    PosterBg,
    MoviesPagination,
  },
  data: () => ({
    posterBg: "",
  }),
  computed: {
    ...mapGetters("moviesStore", ["getMoviesList"]),
  },
  methods: {
    ...mapActions("moviesStore", ["fetchMovies"]),
    getPosterBg(poster) {
      this.posterBg = poster;
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
