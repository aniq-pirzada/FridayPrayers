import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import Parse from "parse";
import vuetify from "./plugins/vuetify";
import "@/plugins/veevalidate";
import "@babel/polyfill";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

Parse.serverURL = "https://parseapi.back4app.com";
Parse.initialize(
  "GGnAVOqV5mE3u3ROAfs78lBRrgGNzV2MzlXTDhBg",
  "A93v1w4lsSrB5rm8OnO3SkhFlUqKJUU4yDWpVyXj"
);

new Vue({
  router,
  store,
  vuetify,
  created() {
    if (Parse.User.current()) {
      this.$store.dispatch("autoSignIn", Parse.User.current());
    }
  },
  render: h => h(App)
}).$mount("#app");
