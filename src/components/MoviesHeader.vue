<template>
  <header class="header">
    <BNavbar type="dark" class="navbar" variant="dark">
      <BContainer>
        <BNavbarBrand href="#" class="navbar-brand">MovieDB</BNavbarBrand>
        <div class="search-button-wrap">
          <BFormInput
            class="mr-sm-2 search-header"
            placeholder="Search"
            v-model="searchText"
            debounce="700"
          ></BFormInput>
          <BButton
            class="button-login"
            variant="outline-primary"
            @click="eventShowModal"
          >
            Login
          </BButton>
        </div>
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
    eventShowModal() {
      this.$emit("showModalLogin");
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
  margin-right: 10px;
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

.search-button-wrap {
  display: flex;
  flex-direction: row;
}

.button-login {
  color: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.3);
}

.button-login:hover {
  background-color: #940294;
  border-color: #940294;
  color: #fff;
}

.button-login:active {
  background-color: #940294 !important;
  border-color: #940294 !important;
}
</style>
