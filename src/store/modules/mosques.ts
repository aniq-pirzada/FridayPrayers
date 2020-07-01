import Parse from "parse";

const state = {
  mosques: [],
  count: 0,
  limit: 25,
  loading: false
};

const getters = {
  allMosques: state => state.mosques,
  mosquesLoading: state => state.loading,
  mosqueCount: state => state.count
};

const actions = {
  async findMosqueByLocation({ commit }, payload) {
    console.log(payload);
    commit("setLoading", true);
    const Mosque = Parse.Object.extend("Mosque");
    const query = new Parse.Query(Mosque);
    const location = new Parse.GeoPoint({
      latitude: payload.location.latitude,
      longitude: payload.location.longitude
    });
    query.withinMiles("location", location, payload.radius);
    query.limit(state.limit);
    query.equalTo("active", true);
    query.withCount();
    query.skip((payload.skip - 1) * state.limit);
    query.find().then(
      results => {
        if (typeof document !== "undefined") {
          if (results) commit("setLoading", false);
          commit("setMosques", results);
        }
      },
      error => {
        commit("setLoading", false);
        if (typeof document !== "undefined") {
          //
        }
      }
    );
  }
};

const mutations = {
  setMosques: (state, mosques) => {
    state.mosques = [...state.mosques, ...mosques.results];
    state.count = mosques.count;
  },
  clearMosques: state => {
    state.mosques = [];
  },
  setLoading(state, payload) {
    state.loading = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
