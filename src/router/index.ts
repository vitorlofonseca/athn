import ComponentsView from "@/views/ComponentsView.vue";
import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import ArtPiece from "@/views/ArtPiece.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/art-piece",
      name: "art-piece",
      component: ArtPiece,
    },
    {
      path: "/components",
      name: "components",
      component: ComponentsView,
    },
  ],
});

export default router;
