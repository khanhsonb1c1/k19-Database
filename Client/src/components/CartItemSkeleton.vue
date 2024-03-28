<template>
  <div class="col-md-3 col-lg-3 mt-3 mb-2 col-6">
    <div class="skeleton-cart-item">
      <div class="image skeleton"></div>
      <p class="mt-3 skeleton"></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style scoped lang="scss">
.skeleton-cart-item {
  padding: 1em;
  display: flex;
  flex-direction: column;

  .image {
    aspect-ratio: 1/1;
  }
  h6 {
    height: 3em;
  }
  p {
    height: 2em;
  }
}
</style>
