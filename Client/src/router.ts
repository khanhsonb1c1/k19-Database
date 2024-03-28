import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";
import HomePage from "./pages/HomePage.vue";
import Products from "./pages/Products.vue";
import ProductDetail from "./pages/ProductDetail.vue";
import ProductCheck from "./pages/ProductCheck.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/products",
      name: "Products",
      component: Products,
    },
    {
      path: "/products/:id",
      name: "Products detail",
      component: ProductDetail,
    },
    {
      path: "/check/:id",
      name: "Products detail check",
      component: ProductCheck,
    },
  ],

  scrollBehavior() {
    return { top: 0 };
  },
});
router.afterEach((to) => {
  nextTick(() => {
    document.title = (to.meta.title || to.name) + " | " + "TomoniVN";
  });
});

export default router;
