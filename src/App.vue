<template>
  <v-app>
    <Toolbar />
    <v-content>
      <router-view></router-view>
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Toolbar from "@/components/core/Toolbar.vue";
import Vue from "vue";
import Footer from "@/components/core/Footer.vue";

export default Vue.extend({
  name: "App",
  components: { Toolbar, Footer },

  data: () => ({
    //
  })
});
</script>
