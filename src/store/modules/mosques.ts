import Parse from "parse";
const state = {
  mosques: [],
  count: 0,
  limit: 25
};

const getters = {
  allMosques: state => state.mosques,
  maxPages: state => Math.ceil(state.count / state.limit)
};

const actions = {
  async fetchMosques({ commit }, payload) {
    const Mosque = Parse.Object.extend("Mosque");
    const query = new Parse.Query(Mosque);
    query.limit(state.limit);
    query.withCount();
    query.skip((payload - 1) * state.limit);
    query.find().then(
      results => {
        if (typeof document !== "undefined") {
          commit("setMosques", results);
        }
        // console.log(`ParseObjects found: ${JSON.stringify(results)}`);
      },
      error => {
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
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
