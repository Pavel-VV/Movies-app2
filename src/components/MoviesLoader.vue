<template>
  <div class="loader-wrap" v-if="isShowLoader">
    <BSpinner type="grow" variant="light" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MoviesLoader",
  computed: {
    ...mapGetters(["isShowLoader"]),
  },
};
</script>

<style scoped>
.loader-wrap {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
}
</style>
