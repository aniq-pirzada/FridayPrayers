import Parse from "parse";

const state = {
  mosques: []
};

const getters = {
  allMosques: state => state.mosques
};

const actions = {
  async fetchMosques({ commit }) {
    const Mosque = Parse.Object.extend("Mosque");
    const query = new Parse.Query(Mosque);
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
  setMosques: (state, mosques) => (state.mosques = mosques)
};

export default {
  state,
  getters,
  actions,
  mutations
};
