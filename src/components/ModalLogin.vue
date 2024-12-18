<template>
  <div>
    <LoginAutoriz @eventCloseModalLogin="onEventCloseModalLogin" />
  </div>
</template>

<script>
import LoginAutoriz from "./LoginAutoriz";
export default {
  name: "ModalLogin",
  components: {
    LoginAutoriz,
  },
  data: () => ({}),
  methods: {
    onEventCloseModalLogin(boolean) {
      this.$emit("closeModalLogin", boolean);
    },
  },
};
</script>

<style scoped></style>
