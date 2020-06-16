<template>
  <v-container>
    <v-row dense>
      <v-col v-for="mosque in allMosques" :key="mosque.id" cols="12">
        <CardItem v-bind:mosque="mosque"></CardItem>
      </v-col>
    </v-row>
  </v-container>
  <!-- 
  <div class="home">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <CardItem
            v-for="mosque in allMosques"
            :key="mosque.id"
            v-bind:mosque="mosque"
          >
            {{ mosque.get("name") }}
          </CardItem>
        </v-col>
      </v-row>
    </v-container>
  </div> -->
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
