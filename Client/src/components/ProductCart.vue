<template>
  <div :class="[layout, 'mt-3 mb-2']" @click="redirectToProductDetail">
    <div class="single-promo single-promo-hover single-promo-1 rounded text-center white-bg h-100">
      <div class="discount" v-if="item.discount">
        <span>{{ item.discount }}%</span>
      </div>
      <div class="circle-icon mb-3">
        <!-- <span class="ti-eye text-white"></span> -->
        <img :src="item.image_url" :alt="item.name" />
      </div>
      <p class="text-left">{{ item?.categories[0]?.name || "Sản phẩm HOT" }}</p>

      <h5 class="text-truncate-2 text-left">{{ item.name }}</h5>
      <div class="d-flex">
        <text-money-inital :amount="item.initial_price" v-if="item.discount" class="mr-2" />
        <text-money :amount="price" color="dark" class="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TextMoney from "./TextMoney.vue";
import TextMoneyInital from "./TextMoneyInital.vue";
import { getPriceOfSupplier } from "@/hooks/useGetPriceOfSupplier";

export default defineComponent({
  components: { TextMoney, TextMoneyInital },

  name: "product-cart-component",
  props: {
    item: {
      required: true,
      type: {} as any,
    },
    layout: {
      default: "col-md-3 col-lg-3 col-6",
    },
  },
  computed: {
    price() {
      const price_by_supplier = getPriceOfSupplier(this.item.suppliers);
      return price_by_supplier ? price_by_supplier : this.item.price;
    },
  },
  methods: {
    redirectToProductDetail() {
      this.$router.push(`/products/${this.item.id}`);
    },
  },
});
</script>

<style scoped>
h5 {
  font-size: 1em;
}
.single-promo {
  padding: 2em 1.5em;
  position: relative;
  /* background: white; */
}
p {
  margin-bottom: 0.5em;
}
.circle-icon {
  aspect-ratio: 1/1;
}

@media screen and (max-width: 767px) {
  .col-6 {
    padding-left: 5px;
    padding-right: 5px;
  }
  .single-promo {
    padding: 1em;
  }
}
</style>
