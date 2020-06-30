import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Mosque from "../views/Mosques.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/mosques/",
    name: "Mosques",
    component: Mosque
  },
  {
    path: "/about",
    name: "About",
    component: About
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
