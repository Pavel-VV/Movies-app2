<template>
  <div class="movies-pagination">
    <BPagination
      v-model="curPage"
      :total-rows="total250OrSearch"
      :per-page="perPage"
      prev-text="Prev"
      next-text="Next"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "MoviesPagination",
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 100,
    },
  },
  data: () => ({
    // currentPage: 1,
    // perPage: 12,
    // total: 100,
  }),
  computed: {
    ...mapGetters("moviesStore", ["getToggleSearch"]),
    total250OrSearch() {
      return this.getToggleSearch ? 10 : this.total;
    },
    curPage: {
      get() {
        return this.currentPage;
      },
      set(page) {
        this.$emit("changePage", page);
      },
    },
  },
};
</script>

<style scoped>
.movies-pagination {
  display: flex;
  justify-content: center;
  margin-top: auto;
}

.movies-pagination >>> .pagination .page-item .page-link {
  background-color: transparent;
  color: #fff;
  box-shadow: none;
}

.movies-pagination >>> .pagination .page-item.active .page-link {
  background-color: #fff;
  border-color: #fff;
  color: #000;
}

.movies-pagination >>> .pagination .page-item.disabled .page-link {
  background-color: rgba(0, 0, 0, 0);
  color: #bbbbbb;
}

.current-page {
  color: #fff;
}
</style>
