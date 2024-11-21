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
