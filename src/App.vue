<template>
  <div id="app">
    <ListMovies :list="getMoviesList" />
  </div>
</template>

<script>
import ListMovies from "./components/ListMovies";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    ListMovies,
  },
  computed: {
    ...mapGetters("moviesStore", ["getMoviesList"]),
  },
  methods: {
    ...mapActions("moviesStore", ["fetchMovies"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
