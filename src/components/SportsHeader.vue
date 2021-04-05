<template>
  <v-card class="pa-4" color="red lighten-2">
    <p class="text-center">
      <v-icon x-large color="white text-center"> fas fa-football-ball </v-icon>
    </p>
    <h1 class="text-center">{{ count }}</h1>
    <h5 class="text--secondary text-center">Sporting Events</h5>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["sportingEvents"]),
    count() {
      if (!this.sportingEvents.meta || !this.sportingEvents.meta.total) {
        return 0;
      }
      return this.sportingEvents.meta.total;
    },
  },
};
</script>

<style></style>