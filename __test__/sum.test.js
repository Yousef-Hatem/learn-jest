const theSum = require("../sum");

// test(name, fn, timeout)
// it(name, fn, timeout)

describe("Check The Numbers Sum Total", () => {
  describe("If No Numbers Or Only One Number", () => {
    test("Return 0 If No Number", () => {
      expect(theSum()).toBe(0);
    });

    test("Return The Number", () => {
      expect(theSum(10)).toBe(10);
    });
  });

  describe("If More Then One Number", () => {
    test("Return The Number 1 + Number 2", () => {
      expect(theSum(15, 25)).toBe(40);
    });

    test("Return The Number 1 + Number 2 + Number 3", () => {
      expect(theSum(10, 20, 30)).toBe(60);
    });

    test("Return The Number 1 + Number 2 + Number 3 + Number 4", () => {
      expect(theSum(10, 20, 30, 10)).toBe(70);
    });

    test("Return The Result Of All Number", () => {
      expect(theSum(1, 9, 10, 40, 20, 10, 100, 10)).toBe(200);
    });
  });
});
