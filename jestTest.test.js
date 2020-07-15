// this is to test Jest is working
// const add = require("./jestTest");
import { add } from "./jestTest.js";

// template
describe("adds", () => {
  it("adds", () => {
    expect(add(1, 1)).toBe(2);
  });
});
