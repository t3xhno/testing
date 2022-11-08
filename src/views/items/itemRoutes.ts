import { RouteRecordRaw } from "vue-router";

const itemRoutes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "ItemList",
    component: () => import("./ItemList.vue"),
  },
];

export default itemRoutes;
