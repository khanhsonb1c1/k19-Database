<template>
  <div class="d-flex bread-crump flex-wrap">
    <router-link to="/">Trang chủ</router-link> <span>/</span> <router-link to="/products">Sản phẩm</router-link>
    <span>/</span>
    <p>{{ target }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    target: {
      type: String,
      required: true,
      default: "",
    },
  },
});
</script>

<style scoped>
.bread-crump {
  font-weight: 500;
  font-size: 0.9em;
}

a {
  color: #1250dc;
}

p {
  margin-bottom: 0;
}
span {
  margin: 0 5px;
}

@media screen and (max-width: 767px) {
  .bread-crump {
    margin-top: 4em;
    margin-left: 1em;
  }
}
</style>
