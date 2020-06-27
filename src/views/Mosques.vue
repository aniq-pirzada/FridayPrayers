<template>
  <div class="home">
    <router-link
      :to="{
        name: 'Mosques',
        query: { postcode: 'postcode', radius: 'radius' }
      }"
    ></router-link>
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
        v-model="postcode"
        @click:append="changeRoute"
        @keydown.enter="changeRoute"
        append-icon="mdi-magnify"
      />
      <v-col cols="2">
        <v-select
          v-model="selectedRadius"
          :items="items"
          item-text="label"
          solo
          hide-details
          single-line
          v-on:change="changeRoute"
        />
      </v-col>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-container>
      <v-alert v-if="error.error" text type="error">
        {{ error.message }}
      </v-alert>
      <v-alert v-else-if="allMosques.length < 1" text type="info">
        {{ "No results found" }}
      </v-alert>
      <v-sheet id="scrolling-techniques">
        <v-row dense>
          <v-col v-for="mosque in allMosques" :key="mosque.id" cols="12">
            <CardItem
              v-bind:mosque="mosque"
              v-bind:distance="distance(mosque.get('location'))"
            ></CardItem>
          </v-col>
        </v-row>
        <observer v-on:intersect="search" />
      </v-sheet>
    </v-container>
  </div>
</template>

<script>
import CardItem from "@/components/CardItem.vue";
import Observer from "@/components/Observer.vue";
import PostcodesIO from "postcodesio-client";
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
  name: "Mosques",
  components: {
    CardItem,
    Observer
  },
  async mounted() {
    this.page = 1;
    this.clearMosques();
    this.selectedRadius = this.items.find(
      element => element.value == this.$route.query.radius
    ).value;
    if (this.selectedRadius == undefined) {
      this.selectedRadius = 1;
    }
  },
  methods: {
    ...mapActions(["findMosqueByLocation"]),
    ...mapMutations(["clearMosques"]),
    async findLocation() {
      const postcodes = new PostcodesIO();
      const postcode = await postcodes.lookup(this.postcode);
      if (postcode) return postcode;
      else return null;
    },
    async search(resetPage) {
      if (resetPage) {
        this.page = 1;
        this.clearMosques();
      }
      if (!this.location) {
        const postcode = await this.findLocation();
        if (postcode) {
          this.location = {
            latitude: postcode.latitude,
            longitude: postcode.longitude
          };
        } else {
          this.error = { error: true, message: "Invalid Postcode" };
          return;
        }
      }
      this.findMosqueByLocation({
        skip: this.page++,
        location: this.location,
        radius: this.selectedRadius
      });
    },
    async changeRoute() {
      this.error = false;
      this.location = null;
      history.pushState(
        {},
        null,
        this.$route.path +
          "?postcode=" +
          this.postcode +
          "&radius=" +
          this.selectedRadius
      );
      this.search(true);
    },
    distance(mosqueLocation) {
      const lat1 = mosqueLocation.latitude;
      const lon1 = mosqueLocation.longitude;
      const lat2 = this.location.latitude;
      const lon2 = this.location.longitude;
      if (lat1 == lat2 && lon1 == lon2) {
        return 0;
      } else {
        const radlat1 = (Math.PI * lat1) / 180;
        const radlat2 = (Math.PI * lat2) / 180;
        const theta = lon1 - lon2;
        const radtheta = (Math.PI * theta) / 180;
        let dist =
          Math.sin(radlat1) * Math.sin(radlat2) +
          Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
          dist = 1;
        }
        dist = Math.acos(dist);
        dist = (dist * 180) / Math.PI;
        dist = dist * 60 * 1.1515;
        return dist.toFixed(2);
      }
    }
  },
  computed: mapGetters(["allMosques", "mosquesLoading", "mosqueCount"]),
  data() {
    return {
      postcode: this.$route.query.postcode,
      radius: this.$route.query.radius,
      location: null,
      page: 1,
      searchText: null,
      selectedRadius: null,
      error: false,
      items: [
        { label: "+1 mile", value: 1 },
        { label: "+3 miles", value: 3 },
        { label: "+5 miles", value: 5 },
        { label: "+10 miles", value: 10 },
        { label: "+15 miles", value: 15 },
        { label: "+20 miles", value: 20 }
      ]
    };
  }
};
</script>
<style scoped>
.sticky {
  position: -webkit-sticky !important;
  position: sticky !important;
  top: 0 !important;
}
</style>
