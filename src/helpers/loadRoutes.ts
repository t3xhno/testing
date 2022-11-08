import { RouteComponent } from "vue-router";

const modules: RouteComponent[] = [];
const loadedRoutes = import.meta.globEager<Record<string, RouteComponent>>("@views/**/*Routes.ts");
Object.values(loadedRoutes).forEach(route => {
  modules.push(route.default);
});

export default modules.flat();
