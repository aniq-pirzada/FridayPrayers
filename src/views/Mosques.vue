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
        v-bind:loading="mosquesLoading"
        v-model="searchText"
        append-icon="mdi-magnify"
        @click:append="search"
        @keydown.enter="search"
      ></v-text-field>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <v-alert v-if="!mosquesLoading && allMosques.length < 1" text type="info">
        {{ "No results found" }}
      </v-alert>
      <v-sheet id="scrolling-techniques">
        <v-row dense>
          <v-col v-for="mosque in allMosques" :key="mosque.id" cols="12">
            <CardItem v-bind:mosque="mosque"></CardItem>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
    <observer v-on:intersect="intersected" />
  </div>
</template>

<script>
import CardItem from "@/components/CardItem.vue";
import Observer from "@/components/Observer.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Home",
  components: {
    CardItem,
    Observer
  },
  mounted() {
    this.page = 1;
    this.clearMosques();
    this.findMosqueByName({
      skip: this.page++,
      searchString: this.searchText
    });
  },
  methods: {
    ...mapActions(["findMosqueByName"]),
    ...mapMutations(["clearMosques"]),
    intersected() {
      this.findMosqueByName({
        skip: this.page++,
        searchString: this.searchText
      });
    },
    search() {
      this.page = 1;
      this.clearMosques();
      this.findMosqueByName({
        skip: this.page++,
        searchString: this.searchText
      });
    }
  },
  computed: mapGetters(["allMosques", "mosquesLoading"]),
  data() {
    return {
      page: 1,
      searchText: null
    };
  }
};
</script>
