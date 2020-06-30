<template>
  <div>
    <section id="guide" class="grey lighten-3">
      <div class="py-12"></div>

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">HOW TO REGISTER</h2>

        <v-responsive class="mx-auto mb-12" width="56">
          <v-divider class="mb-1"></v-divider>

          <v-divider></v-divider>
        </v-responsive>

        <v-row>
          <v-col
            v-for="({ icon, title, text }, i) in features"
            :key="i"
            cols="12"
            md="4"
          >
            <v-card class="py-12 px-4" color="grey lighten-5" flat>
              <v-theme-provider dark>
                <div>
                  <v-avatar color="secondary" size="88">
                    <v-icon large v-text="icon"></v-icon>
                  </v-avatar>
                </div>
              </v-theme-provider>

              <v-card-title
                class="justify-center font-weight-black text-uppercase"
                v-text="title"
              ></v-card-title>

              <v-card-text class="subtitle-1" v-text="text"> </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12"></div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: "mdi-magnify",
          title: "Search",
          text: "Search and find your closest mosque"
        },
        {
          icon: "mdi-pencil",
          title: "Register",
          text: "Complete the registration form with your details"
        },
        {
          icon: "mdi-message-reply-text",
          title: "Await",
          text:
            "The mosque will contact you if you have been selected for this weeks prayer. Please do not come to the mosque without confirmation"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
