import { App, createApp, InjectionKey } from "vue";
import ProgressBar from "@app/components/utilities/ProgressBar.vue";
import { app } from "@app/main";

const progress = createApp(ProgressBar).mount("#progress");

export const PROGRESS: InjectionKey<InstanceType<typeof ProgressBar>> = Symbol("PROGRESS");

export default {
  install: (app: App<Element>) => {
    app.config.globalProperties.$progress = progress;
    app.provide(PROGRESS, app.config.globalProperties.$progress);
  },
};

export const start = () => app.config.globalProperties.$progress.start();
export const finish = () => app.config.globalProperties.$progress.finish();
