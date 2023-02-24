import ComponentsView from "@/views/ComponentsView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/components",
      name: "components",
      component: ComponentsView,
    },
  ],
});

export default router;
