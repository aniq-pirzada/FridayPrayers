<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="5">
        <v-card class="elevation-12">
          <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <v-form @submit.stop.prevent="handleSubmit(submit)">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-alert v-if="error" text type="error" dismissible>
                  {{ error }}
                </v-alert>
                <ValidationProvider rules="email|required" v-slot="{ errors }">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    name="email"
                    prepend-icon="mdi-at"
                    :error="errors.length > 0"
                    :error-messages="errors[0]"
                    type="text"
                  ></v-text-field>
                </ValidationProvider>

                <ValidationProvider rules="required" v-slot="{ errors }">
                  <v-text-field
                    id="password"
                    v-model="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :type="showPassword ? 'text' : 'password'"
                    :error="errors.length > 0"
                    :error-messages="errors[0]"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </ValidationProvider>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" type="submit">Login</v-btn>
              </v-card-actions>
            </v-form>
          </validation-observer>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      email: "",
      password: "",
      showPassword: false
    };
  },
  computed: {
    ...mapGetters(["error", "user"])
  },
  methods: {
    ...mapActions({ login: "login" }),
    submit() {
      this.login({ email: this.email, password: this.password });
    },
    onDismissed() {
      this.$store.dispatch("clearError");
    }
  },
  watch: {
    user(user) {
      if (user !== null && user !== undefined) {
        this.$router.push("/");
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
