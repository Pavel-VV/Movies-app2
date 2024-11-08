<template>
  <div>{{ list }}</div>
</template>

<script>
export default {
  name: "ListMovies",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped></style>
