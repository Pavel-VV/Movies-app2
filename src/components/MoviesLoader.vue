<template>
  <div class="loader" :style="styleLoader">
    <BSpinner type="grow" variant="light" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MoviesLoader",
  computed: {
    ...mapGetters("moviesStore", ["toggleLoader"]),
    styleLoader() {
      return { display: this.toggleLoader };
    },
  },
};
</script>

<style scoped>
.loader {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
</style>
