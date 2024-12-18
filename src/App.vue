<template>
  <div id="app">
    <PosterBg :poster="posterBg" />
    <NotificationToast class="notification" />
    <MoviesHeader @showModalLogin="isShowModalLogin" />
    <ListMovies :list="getMoviesList" @onMouseOverItem="getPosterBg" />
    <MoviesPagination
      class="movies-pagination"
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="getId250Length"
      @changePage="onChangePage"
    />
    <MoviesLoader />
    <BModal
      id="modalLogin"
      class="modal-login"
      hide-footer
      hide-header
      size="md"
    >
      <ModalLogin @closeModalLogin="onCloseModalLogin" />
    </BModal>
  </div>
</template>

<script>
import NotificationToast from "./components/NotificationToast";
import MoviesHeader from "./components/MoviesHeader";
import ListMovies from "./components/ListMovies";
import PosterBg from "./components/PosterBg";
import MoviesPagination from "./components/MoviesPagination";
import MoviesLoader from "./components/MoviesLoader";
import ModalLogin from "./components/ModalLogin";
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
    ModalLogin,
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
    isShowModalLogin() {
      console.log("Modal login");
      this.$bvModal.show("modalLogin");
    },
    onCloseModalLogin(boolean) {
      if (boolean) {
        this.$bvModal.hide("modalLogin");
      }
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, Helvetica;
  position: relative;
}
</style>
