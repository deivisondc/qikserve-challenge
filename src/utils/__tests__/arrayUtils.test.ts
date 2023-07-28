import { arrayHasElements } from "../arrayUtils";

describe("arrayUtils", () => {
  describe("arrayHasElements()", () => {
    it("should return false if it is called without parameter", () => {
      expect(arrayHasElements()).toBe(false);
    });

    it("should return false if parameter is an empty array", () => {
      expect(arrayHasElements([])).toBe(false);
    });

    it("should return true if parameter an array with 1 element", () => {
      expect(arrayHasElements([1])).toBe(true);
    });

    it("should return true if parameter an array with n elements", () => {
      expect(arrayHasElements([1, 2, 3, 4, 5])).toBe(true);
    });
  });
});
