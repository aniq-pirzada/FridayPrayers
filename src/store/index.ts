import Vue from "vue";
import Vuex from "vuex";
import mosques from "./modules/mosques";
import user from "./modules/user";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    mosques,
    user
  }
});
