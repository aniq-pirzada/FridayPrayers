<template>
  <div class="home">
    <HomePage />
    <Info />
    <Guide />
  </div>
</template>

<script>
import HomePage from "@/components/HomePage.vue";
import Info from "@/components/Info.vue";
import Guide from "@/components/Guide.vue";
export default {
  name: "Home",
  components: {
    HomePage,
    Info,
    Guide
  }
};
</script>
