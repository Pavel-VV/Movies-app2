<template>
  <BContainer class="list-movies">
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
    <BModal
      :id="modalInfoId"
      body-class="modal-body-info"
      hide-footer
      hide-header
      size="xl"
    >
      <ModalInfo :movie="selectedMovieInfo" @closeModal="onCloseModal" />
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
    selectedMovieId: "",
    modalInfoId: "modal-movie-info",
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
      return this.selectedMovieId ? this.list[this.selectedMovieId] : null;
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
      this.selectedMovieId = id;
      this.$bvModal.show(this.modalInfoId);
    },
    onCloseModal() {
      this.$bvModal.hide(this.modalInfoId);
      // this.selectedMovieId = null;
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

.list-movies >>> .modal-dialog .modal-content .modal-body {
  padding: 0 !important;
}

.list-movies {
  margin-bottom: 30px;
}
</style>

<style>
.modal-body-info {
  padding: 0 !important;
}
</style>
