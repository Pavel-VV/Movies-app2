<template>
  <div>{{ movie }}</div>
</template>

<script>
export default {
  name: "ModalInfo",
  props: {
    movie: {
      type: Object,
      requiaed: true,
    },
  },
};
</script>

<style scoped></style>
