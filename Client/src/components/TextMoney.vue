<template>
  <span class="price">
    <span :class="[`text-${color}`, custom]">{{ amountDisplay }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { exchange_rate } from "@/configs/commons";

export default defineComponent({
  props: {
    amount: {
      type: Number,
      required: false,
      default: 0,
    },
    currency: {
      type: String,
      default: "VND",
    },
    color: {
      type: String,
      required: false,
    },
    custom: {
      type: String,
      required: false,
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
        return 0;
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
