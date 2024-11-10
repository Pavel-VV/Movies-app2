<template>
  <div class="movie-item mb-3">
    <div class="movie-item-poster" :style="posterBg"></div>
    <div class="movie-info-wrap">
      <div class="movie-info">
        <h3 class="movie-title">Movie {{ movie.Title }}</h3>
        <span class="movie-year">{{ movie.Year }}</span>
      </div>
      <div class="button-control">
        <BButton class="button-edit" size="md" block variant="outline-light"
          >Edit</BButton
        >
        <BButton class="button-info" size="md" block variant="outline-light"
          >Info</BButton
        >
      </div>
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
  data: () => ({}),
  computed: {
    posterBg() {
      return { "background-image": `url(${this.movie.Poster})` };
    },
  },
};
</script>

<style scoped>
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
  height: 450px;
}

.movie-item:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.02);
}

/* .background :hover {
  cursor: pointer;
} */

.movie-item-poster {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.button-control {
  display: flex;
}

.button-edit {
  width: 100%;
  margin-right: 5px;
}

.button-info {
  width: 100%;
  margin-left: 5px;
}

.movie-info-wrap {
  padding: 20px 10px;
  display: flex;
  /* position: relative; */
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  opacity: 0;
  transition: all 0.2s ease;
}

.movie-item:hover .movie-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
}

.movie-title {
  font-size: 20px;
  color: #fff;
}

.movie-year {
  font-size: 16px;
  color: #fff;
}
</style>
