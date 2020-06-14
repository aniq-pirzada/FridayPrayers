import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import firebase from "firebase/app";
import vuetify from "./plugins/vuetify";
import "@/plugins/veevalidate";
import "@babel/polyfill";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcYWa1SNm9ssa2cI44l0iyKHXX8SfLEhs",
  authDomain: "fridayprayers-d90c2.firebaseapp.com",
  databaseURL: "https://fridayprayers-d90c2.firebaseio.com",
  projectId: "fridayprayers-d90c2",
  storageBucket: "fridayprayers-d90c2.appspot.com",
  messagingSenderId: "397437939049",
  appId: "1:397437939049:web:e106501b8f47bd267821f8",
  measurementId: "G-QHN1N1RX7L"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});

// new Vue({
//   router,
//   store,
//   vuetify,
//   render: h => h(App)
// }).$mount("#app");
