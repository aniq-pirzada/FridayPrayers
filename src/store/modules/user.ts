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
  error: state => {
    return state.error;
  },
  loading(state) {
    return state.loading;
  }
};

const actions = {
  autoSignIn({ commit }, user) {
    commit("setUser", user);
  },
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
  },
  register({ commit }, user) {
    commit("setLoading", true);
    commit("clearError");
    const newUser = new Parse.User();
    newUser.set("username", user.email);
    newUser.set("email", user.email);
    newUser.set("password", user.password);
    newUser.set("name", user.name);
    newUser
      .signUp()
      .then(user => {
        console.log(user);
        commit("setLoading", false);
        commit("setUser", user);
      })
      .catch(error => {
        commit("setLoading", false);
        commit("setError", error);
      });
  },
  logout({ commit }) {
    Parse.User.logOut().then(() => {
      commit("setUser", null);
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
      case 200:
        state.error = "The username is missing or empty";
        break;
      case 201:
        state.error = "The password is missing or empty";
        break;
      case 202:
        state.error = "Email already registered";
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
