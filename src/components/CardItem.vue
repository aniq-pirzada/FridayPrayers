<template>
  <v-card class="elevation-12">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">{{ distance }} mi</div>
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
      <!-- <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar> -->
    </v-list-item>
    <v-card-actions>
      <RegisterForm v-bind:mosque="mosque" />
    </v-card-actions>
  </v-card>
</template>

<script>
import RegisterForm from "@/components/core/RegisterForm.vue";
export default {
  components: { RegisterForm },
  props: ["mosque", "distance"]
};
</script>

<style lang="scss" scoped></style>
