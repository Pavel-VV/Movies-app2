<template>
  <div>{{ movie }}</div>
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
};
</script>

<style scoped></style>
