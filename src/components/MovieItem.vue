<template>
  <div class="movie-item mb-3">
    <div class="movie-item-poster" :style="posterBg"></div>
    <div class="movie-info-wrap">
      <div class="movie-info">
        <h3 class="movie-title">Movie {{ movie.Title }}</h3>
        <span class="movie-year">{{ movie.Year }}</span>
      </div>
      <div class="button-control">
        <BButton
          class="button-edit"
          size="md"
          block
          variant="outline-light"
          @click="initialInfoEvent"
          >Info</BButton
        >
        <BButton
          class="button-remove"
          size="md"
          block
          variant="outline-light"
          @click="eventRemove"
          >Remove</BButton
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "MovieItem",
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  data: () => ({}),
  computed: {
    ...mapGetters("authentificationStore", ["getAuth"]),
    isPoster() {
      return this.movie.Poster === "N/A"
        ? "linear-gradient(45deg, #270133, #940294)"
        : `url(${this.movie.Poster})`;
    },
    posterBg() {
      return { "background-image": `${this.isPoster}` };
    },
  },
  methods: {
    ...mapActions(["pushMessageNotification"]),
    eventRemove() {
      if (!this.getAuth) {
        this.pushMessageNotification({
          msg: "autorisation please",
          variant: "danger",
          title: "Error",
        });
        return;
      }
      this.$emit("removeMovie", {
        id: this.movie.imdbID,
        title: this.movie.Title,
      });
    },
    initialInfoEvent() {
      this.$emit("callModalInfo", this.movie.imdbID);
    },
  },
};
</script>

<style scoped>
.movie-item {
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s ease;
  height: 450px;
}

.movie-item:hover {
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.02);
}

/* .background :hover {
  cursor: pointer;
} */

.movie-item-poster {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.button-control {
  display: flex;
}

.button-edit {
  width: 100%;
  margin-right: 5px;
}

.button-remove {
  width: 100%;
  margin-left: 5px;
}

.movie-info-wrap {
  padding: 20px 10px;
  display: flex;
  /* position: relative; */
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  opacity: 0;
  transition: all 0.2s ease;
}

.movie-item:hover .movie-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.7);
}

.movie-title {
  font-size: 20px;
  color: #fff;
}

.movie-year {
  font-size: 16px;
  color: #fff;
}
</style>
