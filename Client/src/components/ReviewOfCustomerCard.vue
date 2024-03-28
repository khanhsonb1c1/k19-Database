<template>
  <img :src="info" class="img-fluid" alt="screenshots" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    info: {
      type: String,
    },
  },
});
</script>

<style></style>
