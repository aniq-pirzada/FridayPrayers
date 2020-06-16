<template>
  <div class="home">
    <CardItem msg="Testing" />
    <div class="mosques">
      <div v-for="mosque in allMosques" :key="mosque.id" class="mosque">
        {{ mosque.get("name") }}
      </div>
    </div>
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
