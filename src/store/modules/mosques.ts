import Parse from "parse";
const state = {
  mosques: [],
  count: 0,
  limit: 25,
  loading: false
};

const getters = {
  allMosques: state => state.mosques,
  mosquesLoading: state => state.loading
};

const actions = {
  async findMosqueByName({ commit }, payload) {
    console.log(payload.skip);
    commit("setLoading", true);
    const Mosque = Parse.Object.extend("Mosque");
    const query = new Parse.Query(Mosque);
    if (payload.searchString) {
      query.fullText("name", payload.searchString);
      console.log(payload.searchString);
    }
    query.limit(state.limit);
    query.withCount();
    query.skip((payload.skip - 1) * state.limit);
    query.find().then(
      results => {
        if (typeof document !== "undefined") {
          commit("setLoading", false);
          commit("setMosques", results);
        }
      },
      error => {
        commit("setLoading", false);
        if (typeof document !== "undefined")
          console.log(
            `Error while fetching ParseObjects: ${JSON.stringify(error)}`
          );
        console.error("Error while fetching ParseObjects", error);
      }
    );
  }
};

const mutations = {
  setMosques: (state, mosques) => {
    console.log(mosques.results);
    // Array.prototype.push.apply(state.mosques, mosques.results);
    state.mosques = [...state.mosques, ...mosques.results];
    // state.mosques = mosques.results;
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
