<template>
  <div class="modal-info-wrap">
    <header class="header-wrap">
      <h6 class="movies-info-tytle">Movies info</h6>
      <BIconX class="close-icon" @click="closeModal" />
    </header>
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
}
</style>
