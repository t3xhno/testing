import loadedRoutes from "@helpers/loadRoutes";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes = [
  ...loadedRoutes as RouteRecordRaw[],
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
