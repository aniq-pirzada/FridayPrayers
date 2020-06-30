<template>
  <div>
    <section id="about-me">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">FAQs</h2>

        <v-responsive class="mx-auto mb-8" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>
        <v-responsive
          class="mx-auto title font-weight-light mb-8"
          max-width="720"
        >
          <VueFaqAccordion :items="myItems" />
        </v-responsive>
      </v-container>
      <div class="py-12"></div>
    </section>
  </div>
</template>

<script>
import VueFaqAccordion from "@/components/core/vue-faq-accordion";

export default {
  components: {
    VueFaqAccordion
  },
  data() {
    return {
      myItems: [
        {
          title: "How will it work?",
          value: `Every week on Thursday we will give a list of all the members registered to the respective mosques.<br />
            The mosques will then contact the members inviting them for the following Jummah on the next day`
        },
        {
          title: "I want to unregister from a mosque",
          value: `Please send a email to: stating your name and phone number, we will remove your registration data for that mosque within 24hours`
        },
        {
          title: "What happens to my data",
          value: `Please send a email to: stating your name and phone number, we will remove your registration data for that mosque within 24hours`
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
