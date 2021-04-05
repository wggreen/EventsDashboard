<template>
  <div>
    <h2 class="rainbow">
      {{ new Date(dates[0]).toUTCString().split(" ").slice(0, 4).join(" ") }}
      <span v-if="dates.length > 1"> - </span>
      <span v-if="dates.length > 1"
        >{{ new Date(dates[1]).toUTCString().split(" ").slice(0, 4).join(" ") }}
      </span>
    </h2>
    <v-date-picker
      v-model="dates"
      range
      @change="selectDate"
      color="teal"
      prev-icon="mdi-skip-previous"
      next-icon="mdi-skip-next"
    ></v-date-picker>
  </div>
</template> 

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  data() {
    return {
      dates: [new Date().toISOString().split("T")[0]],
      events: [],
    };
  },

  methods: {
    ...mapActions([
      "getSportingEvents",
      "getTheaterEvents",
      "getConcertEvents",
    ]),
    ...mapMutations(["setDateSelected"]),
    selectDate() {
      const range = {
        startDate: this.dates[0],
        endDate: this.dates[1],
      };
      this.getSportingEvents(range);
      this.getTheaterEvents(range);
      this.getConcertEvents(range);
    },
  },
};
</script>

<style>
.rainbow {
  animation: colorRotate 6s linear 0s infinite;
}

@keyframes colorRotate {
  from {
    color: #6666ff;
  }
  10% {
    color: #0099ff;
  }
  50% {
    color: #00ff00;
  }
  75% {
    color: #ff3399;
  }
  100% {
    color: #6666ff;
  }
}
</style>