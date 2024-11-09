<template>
  <div
    class="item-wrap"
    style="
      background-image: url(https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_SX300.jpg);
    "
  >
    <div class="movie-info">
      <h5>Movie {{ movie.Title }}</h5>
      <span>{{ movie.Year }}</span>
    </div>
    <div class="button-control">
      <BButton>Edit</BButton>
      <BButton>Info</BButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      requared: true,
    },
  },
  data: () => ({
    defaultBg: "blue",
  }),
  computed: {
    movieBg() {
      return this.movie.Poster ? this.movie.Poster : this.defaultBg;
    },
    movieBgg() {
      return "background-color: blue";
    },
  },
};
</script>

<style scoped>
.item-wrap {
  height: 400px;
}
</style>
