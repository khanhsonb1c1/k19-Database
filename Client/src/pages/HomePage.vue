<template>
  <banner />
  <products />
  <!-- <highlight /> -->
  <about />
  <SupplierInfo />
  <!-- <Activity /> -->
  <services />

  <contact />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Banner from "@/components/Banner.vue";
import Services from "@/components/Services.vue";
// import Highlight from "@/components/Highlight.vue";
// import Activity from "@/components/Activity.vue";
import Contact from "@/components/Contact.vue";
import Products from "@/components/Products.vue";
import About from "@/components/About.vue";
import scrollToElement from "@/hooks/useScrollTo";
import SupplierInfo from "@/components/SupplierInfo.vue";

export default defineComponent({
  components: {
    Banner,
    Services,
    //  Highlight,
    SupplierInfo,
    // Activity,
    Contact,
    Products,
    About,
  },
  computed: {
    hash() {
      return this.$route.hash;
    },
  },
  mounted() {
    this.hash && scrollToElement(this.hash);
  },

  watch: {
    hash: {
      handler(newValue) {
        if (newValue) {
          scrollToElement(newValue);
        }
      },
    },
  },
});
</script>

<style></style>
