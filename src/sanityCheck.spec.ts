import App from "./App.vue";

describe("Sanity checks:", () => {
  test("Tests are set up", () => {
    expect(42).toEqual(42);
  });
  
  test("Transformers are set up", () => {
    expect(App).toBeDefined();
  });
});
