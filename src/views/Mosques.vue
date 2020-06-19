<style scoped>
.sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 0 !important;
}
</style>
<template>
  <div>
    <v-app-bar
      flat
      absolute
      scroll-target="#scrolling-techniques"
      class="sticky"
    >
      <v-spacer></v-spacer>
      <v-text-field
        label="Search"
        hide-details
        single-line
        solo
        clearable
        append-icon="mdi-magnify"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <v-sheet id="scrolling-techniques">
        <v-row dense>
          <v-col v-for="mosque in allMosques" :key="mosque.id" cols="12">
            <CardItem v-bind:mosque="mosque"></CardItem>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    CardItem
  },
  methods: { ...mapActions(["fetchMosques"]) },
  computed: mapGetters(["allMosques"]),
  created() {
    this.fetchMosques();
  }
};
</script>
