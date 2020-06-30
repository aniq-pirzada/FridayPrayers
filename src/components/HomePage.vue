<template>
  <section id="hero">
    <v-row no-gutters>
      <v-img
        :min-height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
        v-bind:style="{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }"
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
  name: "HelloWorld",
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
