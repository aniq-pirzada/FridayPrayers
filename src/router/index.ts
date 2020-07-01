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
    component: Home,
    meta: {
      title: "Jummah - Home"
    }
  },
  {
    path: "/mosques/",
    name: "Mosques",
    component: Mosque,
    meta: {
      title: "Jummah - Search "
    }
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "Jummah - About"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title;
  });
});

export default router;
