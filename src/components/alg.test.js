import { replaceNums } from "./alg";

describe("alg tests", () => {
  describe("replaceNums tests", () => {
    it("replaceNums replaces numbers - they should not be the same", () => {
      let replace = "8 + 45 / 3";
      let actual = replaceNums("8 + 45 / 3");
      expect(actual).not.toBe(replace);
    });
    it("replaceNums does not replace other chars", () => {
      let expected = "+-=/* a";
      let actual = replaceNums("+-=/* a");
      expect(actual).toEqual(expected);
    });
  });
});

// not testing other functions as they depend on third party modules
// feel free to add more though!
