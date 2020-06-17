<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="5">
        <v-card class="elevation-12">
          <validation-observer ref="observer" v-slot="{ handleSubmit }">
            <v-form
              @submit.stop.prevent="handleSubmit(submit)"
              id="register-form"
            >
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-alert v-if="error" text type="error" dismissible>
                  {{ error }}
                </v-alert>
                <ValidationProvider rules="required" v-slot="{ errors }">
                  <v-text-field
                    v-model="name"
                    label="Name"
                    name="name"
                    prepend-icon="mdi-account"
                    :error="errors.length > 0"
                    :error-messages="errors[0]"
                    type="text"
                  ></v-text-field>
                </ValidationProvider>

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

                <ValidationProvider rules="min:6|required" v-slot="{ errors }">
                  <v-text-field
                    id="password"
                    v-model="password"
                    label="Password"
                    name="password"
                    hint="At least 6 characters"
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
                <v-btn color="primary" type="submit">Register</v-btn>
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
  methods: {
    ...mapActions({ register: "register" }),
    submit() {
      // const user = new Parse.User();
      this.register({
        name: this.name,
        email: this.email,
        password: this.password
      });
    }
  },
  computed: {
    ...mapGetters(["error"])
  },

  data() {
    return {
      name: "",
      email: "",
      password: "",
      showPassword: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
