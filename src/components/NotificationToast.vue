<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NotificationToast",
  computed: {
    ...mapGetters(["getMessagePool"]),
  },
  watch: {
    getMessagePool: "callNotificationFunc",
  },
  methods: {
    callNotificationFunc({ msg, title, variant }) {
      this.$bvToast.toast(msg, {
        title,
        variant,
        // autoHideDelay: 5000000,
        solid: true,
      });
    },
  },
};
</script>

<style>
.b-toaster .b-toaster-slot .b-toast .toast {
  display: block;
}

.b-toaster .b-toaster-slot .b-toast .toast .toast-header .close {
  margin-left: auto;
  border: none;
  background: none;
  font-size: 20px;
}
</style>
