<template>
  <v-app>
    <toolbar></toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Toolbar from "./components/core/Toolbar.vue";
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: { toolbar: Toolbar },

  data: () => ({
    //
  })
});
</script>
