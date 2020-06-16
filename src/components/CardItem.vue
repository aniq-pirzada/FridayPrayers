<template>
  <v-card class="elevation-12">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">
          {{ mosque.get("name") }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{
            mosque.get("address").line1 +
              " " +
              mosque.get("address").line2 +
              " " +
              mosque.get("address").city +
              " " +
              mosque.get("address").county +
              " " +
              mosque.get("address").postcode
          }}
        </v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Register</v-btn>
    </v-card-actions>
    <!-- <v-toolbar color="primary" dark flat>
      <v-toolbar-title>{{ mosque.get("name") }}</v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      {{ mosque.get("address").line1 + " " + mosque.get("address").line2 }}
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" type="submit">{{ "Register" }}</v-btn>
    </v-card-actions> -->
  </v-card>
</template>

<script>
export default {
  props: ["mosque"]
};
</script>

<style lang="scss" scoped></style>
