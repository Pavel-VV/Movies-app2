<template>
  <BContainer>
    <h3 class="list-title">{{ tytleListMovies }}</h3>
    <BRow>
      <template v-if="isExist">
        <BCol cols="3" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover.native="mouseOverItem(movie.Poster)"
            @removeMovie="onRemoveMovie"
            @callModalInfo="onCallModalInfo"
          />
        </BCol>
      </template>
      <div v-else>List Empty</div>
    </BRow>
    <BModal :id="modalWindow" hide-footer hide-header>
      <ModalInfo :movie="selectedMovieInfo" />
    </BModal>
  </BContainer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieItem from "./MovieItem";
import ModalInfo from "./ModalInfo";
export default {
  name: "ListMovies",
  components: {
    MovieItem,
    ModalInfo,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    selectedMovie: "",
    modalWindow: "modal-movie-info",
  }),
  computed: {
    ...mapGetters("moviesStore", ["getToggleSearch"]),
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    tytleListMovies() {
      return this.getToggleSearch ? "Search movies" : "IMDB Top 250";
    },
    selectedMovieInfo() {
      return this.selectedMovie ? this.list[this.selectedMovie] : "null";
    },
  },
  methods: {
    ...mapActions("moviesStore", ["removeMovie"]),
    ...mapActions(["pushMessageNotification"]),
    mouseOverItem(poster) {
      this.$emit("onMouseOverItem", poster);
    },
    async onRemoveMovie({ id, title }) {
      console.log(id, title);
      const isConfirm = await this.$bvModal.msgBoxConfirm(`
      Are you sure remove "${title}"?`);
      if (isConfirm) {
        this.removeMovie(id);
        this.pushMessageNotification({
          msg: "Remove movie successful",
          title: "Success",
          variant: "success",
        });
      }
    },
    onCallModalInfo(id) {
      console.log(id);
      this.selectedMovie = id;
      this.$bvModal.show(this.modalWindow);
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
  color: #fff;
}

/* .col {
  margin-bottom: 24px;
} */
</style>
