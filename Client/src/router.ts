import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";
import HomePage from "./pages/HomePage.vue";


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
    
  ],

  scrollBehavior() {
    return { top: 0 };
  },
});
router.afterEach((to) => {
  nextTick(() => {
    document.title = (to.meta.title || to.name) + " | " + "Booking app";
  });
});

export default router;
