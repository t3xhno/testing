import ProgressBar from "./ProgressBar.vue";
import { shallowMount } from "@vue/test-utils";

describe("ProgressBar.vue", () => {
  test("Is hidden on initial render", () => {
    const wrapper = shallowMount(ProgressBar);

    expect(wrapper.classes()).toContain("hidden");
  });

  test("Initializes with 0% width", () => {
    const wrapper = shallowMount(ProgressBar);

    expect((wrapper.element as HTMLElement).style.width).toBe("0%");
  });

  test("Displays the bar when start is called", async () => {
    const wrapper = shallowMount(ProgressBar);

    expect(wrapper.classes()).toContain("hidden");
    
    await wrapper.vm.start();
    
    expect(wrapper.classes()).not.toContain("hidden");
  });
});
