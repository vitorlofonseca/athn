import ComponentsView from "@/views/ComponentsView.vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/components",
      name: "components",
      component: ComponentsView,
    },
  ],
});

export default router;
