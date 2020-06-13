<template>
  <v-app>
    <toolbar></toolbar>
    <top-header></top-header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/register">Register</router-link>
    </div>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Header from "./components/Header.vue";
import Toolbar from "./components/core/Toolbar.vue";
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",
  components: { "top-header": Header, "toolbar": Toolbar },

  data: () => ({
    //
  })
});
</script>
