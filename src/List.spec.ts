import List from "@components/List.vue";
import { shallowMount } from "@vue/test-utils";

describe("List.vue", () => {
  test("Renders the list items", () => {
    const wrapper = shallowMount(List);
    debugger;
    expect(wrapper.text()).toContain("Item 1");
  });
});
