<template>
  <!--partners section start-->
  <section id="products" class="promo-section ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-8">
          <div class="section-heading text-center mb-5">
            <h2 style="font-size: 2.4em;">Sản phẩm nổi bật</h2>
            <p class="lead">Cùng khám phá những sản phẩm nội địa hàng đầu Nhật Bản đang được cung cấp bởi TomoniVN.</p>
          </div>
        </div>
      </div>
      <div class="row equal" v-if="fetching">
        <cart-item-skeleton v-for="i in 8" :key="i" />
      </div>
      <div class="row equal" v-else>
        <product-cart v-for="item in top_products" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { productStore } from "@/stores/productStore";
import { mapState } from "pinia";
import ProductCart from "./ProductCart.vue";
import CartItemSkeleton from "./CartItemSkeleton.vue";

export default defineComponent({
  name: "products-component",
  components: {
    ProductCart,
    CartItemSkeleton,
  },
  created() {
    !this.top_products.length && productStore().fetchTopProducts();
  },
  computed: {
    ...mapState(productStore, ["fetching", "top_products"]),
  }
});
</script>

<style></style>
