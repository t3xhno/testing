import ProgressBar from "./ProgressBar.vue";
import { shallowMount, type VueWrapper } from "@vue/test-utils";

describe("ProgressBar.vue", () => {
  let wrapper: VueWrapper<InstanceType<typeof ProgressBar>>;

  beforeEach(() => {
    wrapper = shallowMount(ProgressBar);
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });
  
    vi.restoreAllMocks();
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

  test("Increases width by 1% every 100ms after start call", async () => {
    await wrapper.vm.start();
    await vi.advanceTimersByTime(100);
    expect((wrapper.element as HTMLElement).style.width).toBe("1%");
    await vi.advanceTimersByTime(900);
    expect((wrapper.element as HTMLElement).style.width).toBe("10%");
    await vi.advanceTimersByTime(4000);
    expect((wrapper.element as HTMLElement).style.width).toBe("50%");
  });

  test("Clears timer when finish is called", async () => {
    // @ts-ignore
    vi.spyOn(window, "setInterval").mockReturnValue(123);
    vi.spyOn(window, "clearInterval");
    expect(window.clearInterval).not.toHaveBeenCalled();
    await wrapper.vm.start();
    await wrapper.vm.finish();
    expect(window.clearInterval).toHaveBeenCalledWith(123);
  });

  test("Stops at 100% and resets back to hidden", async () => {
    await wrapper.vm.start();
    expect(wrapper.classes()).not.toContain("hidden");
    await vi.advanceTimersByTime(10000);
    expect((wrapper.element as HTMLElement).style.width).toBe("100%");
    expect(wrapper.classes()).toContain("hidden");
  });

  test("Mocks start", () => {
    const wrapper = shallowMount(ProgressBar, {
      global: {
        mocks: {
          start: vi.fn(),
        },
      },
    });

    // expect(wrapper.vm.start()).toBe("hehe xd");
    // expect(wrapper.vm.start()).not.toHaveBeenCalled();
  });
});
