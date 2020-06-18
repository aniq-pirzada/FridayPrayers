<template>
  <v-container>
    <v-sheet id="scrolling-techniques">
      <v-autocomplete
        v-model="model"
        :items="items"
        :loading="isLoading"
        :search-input.sync="search"
        chips
        clearable
        hide-details
        hide-selected
        item-text="name"
        item-value="symbol"
        label="Search for a coin..."
        solo
      ></v-autocomplete>
      <v-row dense>
        <v-col v-for="mosque in allMosques" :key="mosque.id" cols="12">
          <CardItem v-bind:mosque="mosque"></CardItem>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
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
