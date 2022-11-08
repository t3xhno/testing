import Item from "./Item.vue";
import type { INews } from "@interfaces/news";
import { shallowMount } from "@vue/test-utils";

const testItem: INews = {
  id: 1,
  age: 12,
  name: "Item 1",
};

describe("Item.vue:", () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallowMount(Item, {
      propsData: {
        item: testItem,
      },
    });
  });
  test("Receives item prop", () => {
    expect(wrapper.text()).toContain("Item 1");
  });
  
  test("Renders age inside <a> tag", () => {
    const aTag = wrapper.find("a");
    expect(parseInt(aTag.text())).toBe(testItem.age);
    expect(aTag.attributes().href).toBe(testItem.name);
  });

  test("Renders item.name inside <a> href", () => {
    const aTag = wrapper.find("a");
    expect(aTag.attributes().href).toBe(testItem.name);
  });
});
