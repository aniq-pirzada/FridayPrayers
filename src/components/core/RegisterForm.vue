<template>
  <v-row>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn text v-bind="attrs" v-on="on">
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Register - {{ mosque.get("name") }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col>
                <!-- Name Field -->
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

                <!-- Mobile Number -->
                <ValidationProvider
                  :rules="{
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

                <!-- Age Group -->
                <v-radio-group v-model="age" :mandatory="true">
                  <v-radio label="11 - 18" value="0"></v-radio>
                  <v-radio label="19 - 70" value="1"></v-radio>
                </v-radio-group>

                <!-- Gender Group -->
                <v-radio-group v-model="gender" :mandatory="true">
                  <v-radio label="Male" value="0"></v-radio>
                  <v-radio label="Female" value="1"></v-radio>
                </v-radio-group>

                <!-- Confirmation -->
                <v-checkbox
                  v-model="confirmation"
                  :label="
                    `I confirm that i dont have any underlying health conditions that compromises immunity *`
                  "
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false"
            >Register</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    name: "",
    phone: "",
    age: "",
    gender: "",
    confirmation: ""
  }),
  props: ["mosque"]
};
</script>

<style lang="scss" scoped></style>
