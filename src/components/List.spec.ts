import List from "./List.vue";
import Item from "@components/Item.vue";
import { INews } from "@interfaces/news";
import { mount, shallowMount, VueWrapper } from "@vue/test-utils";

const testItems: INews[] = [
  {
    id: 1,
    age: 12,
    name: "Item 1",
  },
  {
    id: 2,
    age: 15,
    name: "Item 2",
  },
  {
    id: 3,
    age: 27,
    name: "Item 3",
  },
];

describe("List.vue", () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(List, {
      propsData: {
        items: testItems,
      },
    });
  });

  test("Renders the list items", () => {
    expect(wrapper.text()).toContain("Item 1");
  });

  test("Renders the correct number of items", () => {
    const wrapper = shallowMount(List, {
      propsData: {
        items: testItems,
      },
    });

    expect(wrapper.findAllComponents(Item)).toHaveLength(testItems.length);
  });
});
