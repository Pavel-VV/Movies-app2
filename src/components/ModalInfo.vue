<template>
  <div class="modal-info-wrap">
    <header class="header-wrap">
      <h6 class="movies-info-tytle">Movie info</h6>
      <BIconX class="close-icon" @click="closeModal" />
    </header>
    <div class="movies-info-content">
      <BRow>
        <BCol sm="4">
          <div class="info-poster-wrap">
            <div class="info-poster" :style="posterStyle"></div>
          </div>
        </BCol>
        <BCol sm="8">
          <h1 class="movie-title">{{ movie.Title }}</h1>
          <BFormRating
            class="movie-rating"
            v-model="movieRating"
            readonly
            stars="10"
            show-value
            show-value-max
            no-border
            precision="1"
          />
          <p class="movie-info">{{ movie.Plot }}</p>
          <div class="mt-3 mb-4">
            <BBadge class="badge-info" variant="success">{{
              movie.Year
            }}</BBadge>
            <BBadge class="badge-info" variant="success">{{
              movie.Language
            }}</BBadge>
            <BBadge class="badge-info" variant="success">{{
              movie.Genre
            }}</BBadge>
            <BBadge class="badge-info" variant="success">{{
              movie.Runtime
            }}</BBadge>
          </div>
          <table class="table small">
            <tbody>
              <tr>
                <th>Production</th>
                <td>{{ movie.Production }}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{{ movie.Country }}</td>
              </tr>
              <tr>
                <th>Director</th>
                <td>{{ movie.Director }}</td>
              </tr>
              <tr>
                <th>Writer</th>
                <td>{{ movie.Writer }}</td>
              </tr>
              <tr>
                <th>Actors</th>
                <td>{{ movie.Actors }}</td>
              </tr>
              <tr>
                <th>Awards</th>
                <td>{{ movie.Awards }}</td>
              </tr>
            </tbody>
          </table>
        </BCol>
      </BRow>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalInfo",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    defaultPoster: "linear-gradient(45deg, #270133, #940294)",
  }),
  computed: {
    isPoster() {
      return this.movie.Poster === "N/A"
        ? "linear-gradient(45deg, #270133, #940294)"
        : `url(${this.movie.Poster})`;
    },
    posterBg() {
      return this.movie.Poster ? this.isPoster : this.defaultPoster;
    },
    posterStyle() {
      return { "background-image": this.posterBg };
    },
    movieRating() {
      return this.movie.imdbRating;
    },
  },
  methods: {
    closeModal() {
      console.log("close");
      this.$emit("closeModal");
    },
  },
};
</script>

<style scoped>
.header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(45deg, #270133, #940294);
  color: #fff;
  padding: 1rem;
}

.movies-info-tytle {
  margin-bottom: 0;
}

.close-icon {
  cursor: pointer;
  font-size: 24px;
}

.movies-info-content {
  padding: 10px;
  background-color: #fff;
}

.info-poster-wrap {
  position: relative;
  padding-bottom: 150%;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
}

.info-poster {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center center;
}

.movie-title {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
}

.movie-rating {
  padding: 0;
  margin-top: 5px;
  margin-bottom: 10px;
}

.movie-rating >>> .b-rating-star,
.movie-rating >>> .b-rating-value {
  flex-grow: 0 !important;
  justify-content: flex-start;
  font-weight: 300;
  font-size: 1.3rem;
  padding: 0;
}

.movie-rating:focus {
  box-shadow: none;
}

.movie-rating >>> .b-rating-star .b-rating-icon {
  color: #ffda1f;
}

.movie-rating >>> .b-rating-star + .b-rating-star {
  padding-left: 10px;
}

.movie-rating >>> .b-rating-value {
  padding-left: 10px;
}

.movie-info {
  font-size: 1.25rem;
  font-weight: 300;
}

.badge-info {
  background-color: #28a745;
  margin-left: 4px;
}
</style>
