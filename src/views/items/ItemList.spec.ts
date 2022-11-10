vi.mock("@api/newsApi");
import { fetchNews } from "@api/newsApi";

describe("ItemList.vue", () => {
  test("Fetches data", async () => {
    // expect.assertions(1);
    const data = await fetchNews();
    // expect(data).toBe("some data");
  });
});
