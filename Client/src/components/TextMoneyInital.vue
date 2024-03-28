<template>
  <span :class="[custom, 'discount-price']">{{ amountDisplay }}</span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { exchange_rate } from "@/configs/commons";

export default defineComponent({
  props: {
    amount: {
      type: Number,
      required: true,
      default: 0,
    },
     currency: {
      type: String,
      default: "VND",
    },
    custom: {
      type: String,
    },
    to_vnd: {
      type: Boolean,
      default: true,
      required: false,
    },
  },

  computed: {
    amountDisplay() {
      if (!this.amount && this.amount !== 0) {
        return NaN;
      }

      let amount = this.amount;

      if (this.to_vnd && this.currency == "VND") {
        amount = exchange_rate * amount;
      }

      const price = new Intl.NumberFormat("ja-JP", {
        style: "currency",
        currency: this.currency,
      }).format(amount);

      if (this.currency == "VND") {
        const result = price.replace(/[₫]/g, "").trim();
        return `${result} đ`;
      } else return price;
    },
  },
});
</script>
<style scoped>
.discount-price {
  text-decoration: line-through;
}
</style>
