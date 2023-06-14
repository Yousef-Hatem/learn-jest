const theFilter = require("../input");

describe("Validate The Input Field", () => {
  test("Check If Name Is Empty", () => {
    expect(theFilter()).toBe("Unknown");
  });
  test("Check For Spaces (Start + End)", () => {
    expect(theFilter(" Yousef ")).toBe("Yousef");
  });
  test("Check If Name Length > 10 Characters", () => {
    expect(theFilter("Yousef_Hatem_Ahmed")).toBe("Yousef_Hat");
  });
  test("Check If Name Not Starts With Underscore", () => {
    expect(theFilter("_Yousef")).toBe("Yousef");
  });
});
