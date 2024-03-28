<template>
  <section class="promo-section ptb-100">
    <div class="container">
      <div class="filter-category">
        <filter-category-item :item="item" v-for="item in categories" :key="item.id" />
        <!-- <div class="item" v-for="item in categories" :key="item.id">
          <span>{{ item.name }}</span>
        </div> -->
      </div>
      <div class="row equal" v-if="fetching">
        <cart-item-skeleton v-for="i in 8" :key="i" />
      </div>
      <div class="row equal" v-else>
        <product-cart v-for="item in list" :key="item.id" :item="item" />
      </div>
      <pagination :paginate="pagination" @change-page="changePage" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCart from "@/components/ProductCart.vue";
import CartItemSkeleton from "@/components/CartItemSkeleton.vue";
import { mapState } from "pinia";
import { productStore } from "@/stores/productStore";
import Pagination from "@/components/Pagination.vue";
import filterCategoryItem from "@/components/filterCategoryItem.vue";

export default defineComponent({
  name: "product-list-page",
  components: {
    ProductCart,
    CartItemSkeleton,
    Pagination,
    filterCategoryItem,
  },
  data() {
    return {
      // query: {} as any,
      categories: [
        {
          name: "Tất cả",
          id: undefined,
        },
        {
          name: "Chăm sóc tóc",
          id: "003",
        },
        {
          name: "Chăm sóc da",
          id: "002",
        },
        {
          name: "Thực phẩm",
          id: "026",
        },
        {
          name: "Thực phẩm chức năng",
          id: "008",
        },
      ],
    };
  },
  computed: {
    ...mapState(productStore, ["list", "fetching", "pagination"]),
    query() {
      return this.$route.query;
    },
  },
  watch: {
    query: {
      immediate: true,
      handler() {
        this.fetchProduct();
      },
    },
  },

  methods: {
    changePage(page: number) {
      this.$router.push({
        query: {
          page: page,
        },
      });
    },
    fetchProduct() {
      productStore().fetchProductList(this.query);
    },
  },
});
</script>

<style scoped lang="scss">
.promo-section {
  margin-top: 50px;
}
@media screen and (max-width: 767px) {
  .promo-section {
    margin-top: 80px;
  }
}

.filter-category {
  display: flex;
  flex-wrap: wrap;
}
</style>
