import Parse from "parse";

const state = {
  user: null,
  loading: false,
  error: null
};

const getters = {
  user(state) {
    return state.user;
  },
  error(state) {
    return state.error;
  },
  loading(state) {
    return state.loading;
  }
};

const actions = {
  login({ commit }, user) {
    commit("setLoading", true);
    commit("clearError");
    Parse.User.logIn(user.email, user.password)
      .then(user => {
        commit("setLoading", false);
        console.log(user);
        commit("setUser", user);
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
        // console.log(error);
      });
  }
};

const mutations = {
  setUser(state, payload) {
    state.user = payload;
  },
  setLoading(state, payload) {
    state.loading = payload;
  },
  setError(state, error) {
    switch (error.code) {
      case 101:
        state.error = "Invalid email / password";
        break;
      default:
        console.log(error.code);
        state.error = "Unkown error, please contact";
    }
  },
  clearError(state) {
    state.error = null;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
