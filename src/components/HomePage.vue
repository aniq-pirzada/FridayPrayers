<template>
  <section id="hero">
    <v-row no-gutters>
      <v-img
        class="styleOne"
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
      >
        <v-theme-provider light>
          <v-container fill-height>
            <v-row align="center" class="white--text mx-auto" justify="center">
              <v-col class="white--text text-center" cols="12" tag="h1">
                <span
                  :class="[
                    $vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2'
                  ]"
                  class="font-weight-light"
                >
                  Search for a mosque to register for Jummah Prayers
                </span>
                <br />
                <br />
                <validation-observer ref="observer" v-slot="{ handleSubmit }">
                  <v-form @submit.stop.prevent="handleSubmit(changeRoute)">
                    <ValidationProvider rules="required" v-slot="{}">
                      <v-text-field
                        label="Postcode"
                        hide-details
                        single-line
                        v-model="postcode"
                        solo
                        clearable
                        append-icon="mdi-magnify"
                      />
                    </ValidationProvider>
                  </v-form>
                </validation-observer>
              </v-col>
              <v-btn
                dark
                class="align-self-end"
                outlined
                @click="$vuetify.goTo('#about-me')"
              >
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </v-row>
          </v-container>
        </v-theme-provider>
      </v-img>
    </v-row>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import router from "../router";

export default Vue.extend({
  name: "Jummah",
  data: () => ({
    postcode: null
  }),
  methods: {
    changeRoute() {
      console.log("Postcode: ", this.postcode);
      router.push({
        name: "Mosques",
        query: { postcode: this.postcode, radius: "1" }
      });
    }
  }
});
</script>
<style scoped>
.box {
  content: "";
  height: 500px;
  width: 100%;
}

.styleOne {
  background-color: #16a085;
  background-image: linear-gradient(67.5deg, #16a085 10%, transparent 10%),
    linear-gradient(157.5deg, #16a085 10%, transparent 10%),
    linear-gradient(67.5deg, transparent 90%, #16a085 90%),
    linear-gradient(157.5deg, transparent 90%, #16a085 90%),
    linear-gradient(22.5deg, #16a085 10%, transparent 10%),
    linear-gradient(112.5deg, #16a085 10%, transparent 10%),
    linear-gradient(22.5deg, transparent 90%, #16a085 90%),
    linear-gradient(112.5deg, transparent 90%, #16a085 90%),
    linear-gradient(
      22.5deg,
      transparent 33%,
      #d5d8dc 33%,
      #d5d8dc 36%,
      transparent 36%,
      transparent 64%,
      #d5d8dc 64%,
      #d5d8dc 67%,
      transparent 67%
    ),
    linear-gradient(
      -22.5deg,
      transparent 33%,
      #d5d8dc 33%,
      #d5d8dc 36%,
      transparent 36%,
      transparent 64%,
      #d5d8dc 64%,
      #d5d8dc 67%,
      transparent 67%
    ),
    linear-gradient(
      112.5deg,
      transparent 33%,
      #d5d8dc 33%,
      #d5d8dc 36%,
      transparent 36%,
      transparent 64%,
      #d5d8dc 64%,
      #d5d8dc 67%,
      transparent 67%
    ),
    linear-gradient(
      -112.5deg,
      transparent 33%,
      #d5d8dc 33%,
      #d5d8dc 36%,
      transparent 36%,
      transparent 64%,
      #d5d8dc 64%,
      #d5d8dc 67%,
      transparent 67%
    );
  /*guidelines*/
  /*   linear-gradient(transparent 49%, black 50%, transparent 51%), 
  linear-gradient(90deg, transparent 49%, black 50%, transparent 51%),
  linear-gradient(45deg, transparent 49%, black 50%, transparent 51%),
  linear-gradient(-45deg, transparent 49%, black 50%, transparent 51%),
  radial-gradient(transparent 69%, black 70%, transparent 71%),
  linear-gradient(45deg, pink, teal); */
  background-size: 250px 250px;
  background-position: -100px 150px, -150px 150px, -150px 100px, -100px 100px,
    -150px 100px, -100px 100px, -100px 150px, -150px 150px, 0 0, 0 0, 0 0, 0 0;
  background-repeat: repeat;
}
</style>
