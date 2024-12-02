<template>
  <div class="modal-info-wrap">
    <header class="header-wrap">
      <h6 class="movies-info-tytle">Movies info</h6>
      <BIconX class="close-icon" @click="closeModal" />
    </header>
    <div class="movies-info-content">
      <BRow>
        <BCol sm="4">
          <div class="info-poster-wrap">
            <div class="info-poster" :style="posterStyle"></div>
          </div>
        </BCol>
        <BCol sm="8"></BCol>
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
  },
  methods: {
    closeModal() {
      console.log("close");
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
</style>
