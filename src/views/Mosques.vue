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
      <observer v-on:intersect="intersected" />
    </v-container>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem.vue";
import Observer from "@/components/Observer.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    CardItem,
    Observer
  },
  methods: {
    ...mapActions(["fetchMosques"]),
    intersected() {
      console.log("intersected");
      this.fetchMosques(this.page++);
    }
  },
  computed: mapGetters(["allMosques", "maxPages"]),
  data() {
    return {
      page: 1,
      observer: null
    };
  }
};
</script>
