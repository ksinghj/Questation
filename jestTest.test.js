// this is to test Jest is working
const add = require("./jestTest");

// template
describe("adds", () => {
  it("adds", () => {
    expect(add(1, 1)).toBe(2);
  });
});
