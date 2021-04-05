  
<template>
  <v-card class="pa-4" color="blue lighten-2">
    <p class="text-center">
      <v-icon x-large color="white text-center"> fas fa-film </v-icon>
    </p>
    <h1 class="text-center">{{ count }}</h1>
    <h5 class="text--secondary text-center">Theater Events</h5>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["theaterEvents"]),
    count() {
      if (!this.theaterEvents.meta || !this.theaterEvents.meta.total) {
        return 0;
      }
      return this.theaterEvents.meta.total;
    },
  },
};
</script>

<style></style>