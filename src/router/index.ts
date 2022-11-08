import { createRouter, createWebHistory } from "vue-router";
import itemRoutes from "@views/items/itemRoutes";

const routes = [
  ...itemRoutes,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
