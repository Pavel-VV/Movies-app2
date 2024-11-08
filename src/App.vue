<template>
  <div id="app">
    <ListItems :list="getMovies" />
  </div>
</template>

<script>
import ListItems from "./components/ListItems";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "App",
  components: {
    ListItems,
  },
  mounted() {
    // this.fetchMovies();
  },
  computed: {
    ...mapGetters("moviesStore", ["getMovies"]),
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
