<template>
  <BContainer>
    <h3 class="list-title">IMDB Top 250</h3>
    <BRow>
      <template v-if="isExist">
        <BCol cols="3" v-for="(movie, key) in list" :key="key">
          <MovieItem
            :movie="movie"
            @mouseover.native="mouseOverItem(movie.Poster)"
          />
        </BCol>
      </template>
      <div v-else>List Empty</div>
    </BRow>
  </BContainer>
</template>

<script>
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
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
  methods: {
    mouseOverItem(poster) {
      this.$emit("onMouseOverItem", poster);
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
