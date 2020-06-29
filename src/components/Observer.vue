<template>
  <div class="observer"></div>
</template>

<script>
export default {
  name: "observer",
  data() {
    return {
      observer: null
    };
  },
  methods: {
    disconnect() {
      console.log("Disconnect");
      this.observer.disconnect();
    }
  },
  mounted() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.$emit("intersect");
      }
    });
    this.observer.observe(this.$el);
  }
};
</script>

<style lang="scss" scoped></style>
