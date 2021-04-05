import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const API_KEY = process.env.VUE_APP_SEATGEEK_KEY;
const getSeatgeekUrl = (type, dateRange) => {
  return `https://api.seatgeek.com/2/events?taxonomies.name=${type}&client_id=${API_KEY}&venue.city=nashville&venue.state=TN&sort=score.desc&datetime_local.gte=${dateRange.startDate}&datetime_local.lte=${dateRange.endDate}`;
};

export default new Vuex.Store({
  state: {
    startDate: null,
    endDate: null,
    sportingEvents: {},
    theaterEvents: {},
    concertEvents: {},
  },
  mutations: {
    setDateSelected(state, payload) {
      state.startDate = payload.startDate;
      state.endDate = payload.endDate;
    },
    setSportingEvents(state, payload) {
      state.sportingEvents = payload;
    },
    setTheaterEvents(state, payload) {
      state.theaterEvents = payload;
    },
    setConcertEvents(state, payload) {
      state.concertEvents = payload;
    }
  },
  actions: {
    async getSportingEvents({ commit }, range) {
      const url = getSeatgeekUrl("sports", range);
      const res = await fetch(url);
      const data = await res.json();
      commit("setSportingEvents", data);
    },
    async getTheaterEvents({ commit }, range) {
      const url = getSeatgeekUrl("theater", range);
      const res = await fetch(url);
      const data = await res.json();
      commit("setTheaterEvents", data);
    },
    async getConcertEvents({ commit }, range) {
      const url = getSeatgeekUrl("concert", range);
      const res = await fetch(url);
      const data = await res.json();
      commit("setConcertEvents", data);
    },
  },
  modules: {},
  getters: {
    topSporting(state) {
      if (!state.sportingEvents.events) {
        return [];
      }

      return state.sportingEvents.events.slice(0, 3);
    },
  },

});
