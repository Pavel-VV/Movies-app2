<template>
  <header class="header">
    <BNavbar type="dark" class="navbar" variant="dark">
      <BContainer>
        <BNavbarBrand href="#" class="navbar-brand">MovieDB</BNavbarBrand>
        <BFormInput
          class="mr-sm-2 search-header"
          placeholder="Search"
          v-model="searchText"
          debounce="700"
        ></BFormInput>
      </BContainer>
    </BNavbar>
  </header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MoviesHeader",
  data: () => ({
    searchText: "",
  }),
  watch: {
    searchText: "onSearchMovies",
  },
  methods: {
    ...mapActions("moviesStore", [
      "searchMovies",
      "fetchMovies",
      "toggleSearch",
    ]),
    onSearchMovies(value) {
      if (value) {
        console.log(value);
        this.searchMovies(value);
        // this.toggleSearch(true);
      } else {
        this.fetchMovies();
        // this.toggleSearch(false);
      }
    },
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 30px;
}

.navbar {
  background-color: rgba(0, 0, 0, 0.7) !important;
}

.search-header {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
  width: 220px;
}

.search-header:focus {
  background-color: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
  color: #fff;
  box-shadow: none;
}

.search-header::placeholder {
  color: rgba(255, 255, 255, 0.3);
}
</style>
