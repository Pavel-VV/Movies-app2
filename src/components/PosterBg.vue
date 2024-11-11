<template>
  <div class="poster-bg" :style="posterStyle"></div>
</template>

<script>
export default {
  name: "PosterBg",
  props: {
    poster: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    posterDefault: "linear-gradient(45deg, #270133, #940294)",
  }),
  computed: {
    posterStyle() {
      return { "background-image": this.posterBg };
    },
    posterBg() {
      return this.poster ? `url(${this.poster})` : this.posterDefault;
    },
  },
};
</script>

<style scoped>
.poster-bg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.2s ease;
  z-index: -1;
}

.poster-bg::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 0.7;
  background-image: linear-gradient(45deg, #270133, #940294);
}
</style>
