<template>
  <v-container>
    <v-row dense>
      <v-col v-for="mosque in allMosques" :key="mosque.id" cols="12">
        <CardItem v-bind:mosque="mosque"></CardItem>
      </v-col>
    </v-row>
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
