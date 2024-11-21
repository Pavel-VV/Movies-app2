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
          />
        </BCol>
      </template>
      <div v-else>List Empty</div>
    </BRow>
  </BContainer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MovieItem from "./MovieItem";
export default {
  name: "ListMovies",
  components: {
    MovieItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    ...mapGetters("moviesStore", ["getToggleSearch"]),
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
    tytleListMovies() {
      return this.getToggleSearch ? "Search movies" : "IMDB Top 250";
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
