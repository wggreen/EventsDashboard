
<template>
  <v-app id="app">
    <v-main>
      <v-container class="pt-12">
        <v-row>
          <v-col sm="12" lg="6" xl="5">
            <v-row class="mb-6">
              <v-col>
                <sports-header></sports-header>
              </v-col>
              <v-col>
                <theater-header></theater-header>
              </v-col>
              <v-col>
                <concerts-header></concerts-header>
              </v-col>
            </v-row>
            <date-picker class="mb-5"></date-picker>
          </v-col>
          <v-col sm="12" lg="6" xl="7">
            <sports-table class="mb-6"></sports-table>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import DatePicker from "./components/DatePicker";
import SportsHeader from "./components/SportsHeader";
import TheaterHeader from "./components/TheaterHeader";
import ConcertsHeader from "./components/ConcertsHeader";
import SportsTable from "./components/SportsTable";

export default {
  data() {
    return {};
  },
  components: {
    DatePicker,
    SportsHeader,
    TheaterHeader,
    ConcertsHeader,
    SportsTable,
  },
};
</script>

<style>
#app {
  background: #f0f0f0 !important;
}
</style>