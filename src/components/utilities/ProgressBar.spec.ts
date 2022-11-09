import ProgressBar from "./ProgressBar.vue";
import { shallowMount, type VueWrapper } from "@vue/test-utils";

describe("ProgressBar.vue", () => {
  let wrapper: VueWrapper<InstanceType<typeof ProgressBar>>;

  beforeEach(() => {
    wrapper = shallowMount(ProgressBar);
  });

  test("Is hidden on initial render", () => {
    expect(wrapper.classes()).toContain("hidden");
  });

  test("Initializes with 0% width", () => {
    expect((wrapper.element as HTMLElement).style.width).toBe("0%");
  });

  test("Displays the bar when start is called", async () => {
    expect(wrapper.classes()).toContain("hidden");
    
    await wrapper.vm.start();
    
    expect(wrapper.classes()).not.toContain("hidden");
  });

  test("Sets the bar to 100% width when finish is called", async () => {
    await wrapper.vm.finish();
    expect((wrapper.element as HTMLElement).style.width).toBe("100%");
  });

  test("Hides the bar when finish is called", async () => {
    await wrapper.vm.start();
    await wrapper.vm.finish();
    expect(wrapper.classes()).toContain("hidden");
  });

  test("Resets to 0% width when start is called", async () => {
    await wrapper.vm.finish();
    await wrapper.vm.start();
    expect((wrapper.element as HTMLElement).style.width).toBe("0%");
  });
});
