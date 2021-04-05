<template>
  <v-card class="pa-4" color="purple lighten-2">
    <p class="text-center">
      <v-icon x-large color="white text-center"> fas fa-music </v-icon>
    </p>
    <h1 class="text-center">{{ count }}</h1>
    <h5 class="text--secondary text-center">Concert Events</h5>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["concertEvents"]),

    count() {
      if (!this.concertEvents.meta || !this.concertEvents.meta.total) {
        return 0;
      }
      return this.concertEvents.meta.total;
    },
  },
};
</script>

<style></style>