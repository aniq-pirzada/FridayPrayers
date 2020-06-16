import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
// import firebase from "firebase/app";
import Parse from "parse";
import vuetify from "./plugins/vuetify";
import "@/plugins/veevalidate";
import "@babel/polyfill";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Parse.serverURL = "https://parseapi.back4app.com"; // This is your Server URL
Parse.initialize(
  "GGnAVOqV5mE3u3ROAfs78lBRrgGNzV2MzlXTDhBg", // This is your Application ID
  "A93v1w4lsSrB5rm8OnO3SkhFlUqKJUU4yDWpVyXj", // This is your Javascript key
);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
