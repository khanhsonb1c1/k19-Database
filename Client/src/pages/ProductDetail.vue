<template>
  <product-detail :detail="detail">
    <template #check_info></template>
  </product-detail>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "pinia";
import { productStore } from "@/stores/productStore";
import ProductDetail from "@/components/ProductDetail.vue";

export default defineComponent({
  components: { ProductDetail },
  data() {
    return {};
  },
  computed: {
    id() {
      return String(this.$route.params.id);
    },

    ...mapState(productStore, ["detail", "fetching"]),
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        productStore().fetchDetailProduct(this.id);
      },
    },
  },

  methods: {
    //
  },
});
</script>

<style scoped lang="scss"></style>
