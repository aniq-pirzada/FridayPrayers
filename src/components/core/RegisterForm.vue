<template>
  <v-row>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          Register
        </v-btn>
      </template>
      <v-card class="elevation-12">
        <validation-observer ref="observer" v-slot="{ handleSubmit }">
          <v-form
            @submit.stop.prevent="handleSubmit(submit)"
            id="register-form"
          >
            <v-list-item three-line>
              <v-list-item-content>
                <div class="overline mb-4">Register</div>
                <v-list-item-title class="headline mb-1">
                  {{ mosque.get("name") }}
                </v-list-item-title>
                <v-container>
                  <v-row>
                    <v-col cols="12">
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

                      <ValidationProvider
                        :rules="{
                          required: true,
                          regex: /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/
                        }"
                        v-slot="{ errors }"
                      >
                        <v-text-field
                          v-model="phone"
                          label="Phone"
                          name="phone"
                          prepend-icon="mdi-phone"
                          :error="errors.length > 0"
                          :error-messages="errors[0]"
                          type="text"
                        ></v-text-field>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <v-select
                          prepend-icon="mdi-human-male-boy"
                          :items="['11-17', '18-29', '30-50', '50-70']"
                          v-model="age"
                          label="Age"
                          :error="errors.length > 0"
                          :error-messages="errors[0]"
                          required
                        ></v-select>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12" sm="6">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <v-select
                          prepend-icon="mdi-human-male-female"
                          :items="['Male', 'Female']"
                          :error="errors.length > 0"
                          :error-messages="errors[0]"
                          v-model="gender"
                          label="Gender"
                          required
                        ></v-select>
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12">
                      <ValidationProvider rules="required" v-slot="{ errors }">
                        <v-select
                          prepend-icon="mdi-clock"
                          :items="mosque.get('times')"
                          :error="errors.length > 0"
                          :error-messages="errors[0]"
                          v-model="time"
                          label="Gender"
                          required
                        ></v-select>
                      </ValidationProvider>
                      <ValidationProvider
                        :rules="{ required: { allowFalse: false } }"
                        v-slot="{ errors }"
                      >
                        <v-checkbox
                          v-model="confirmation"
                          :error="errors.length > 0"
                          :error-messages="errors[0]"
                          :label="
                            `I confirm that i dont have any underlying health conditions that compromises immunity *`
                          "
                        ></v-checkbox>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                </v-container>
              </v-list-item-content>
            </v-list-item>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text type="submit">Register</v-btn>
            </v-card-actions>
          </v-form>
        </validation-observer>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import Parse from "parse";

export default {
  data: () => ({
    dialog: false,
    name: "",
    phone: "",
    age: "",
    gender: "",
    time: "",
    confirmation: false
  }),
  props: ["mosque"],
  methods: {
    submit() {
      // const user = new Parse.User();
      console.log(
        "mosqueId: ",
        this.mosque.id,
        ", ",
        this.name,
        ", ",
        this.phone,
        ", ",
        this.age,
        ", ",
        this.gender,
        ", ",
        this.time,
        ", ",
        this.confirmation
      );
      const Registrations = Parse.Object.extend("Registrations");
      const registration = new Registrations();
      registration.set("mosque", this.mosque);
      registration.set("name", this.name);
      registration.set("phone", this.phone);
      registration.set("age", this.age);
      registration.set("gender", this.gender);
      registration.set("time", this.time);
      registration.set("consent", this.confirmation);

      registration.save().then(
        obj => {
          console.log("Object Created", obj);
        },
        error => {
          console.log("Failed to create", error.message);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped></style>
