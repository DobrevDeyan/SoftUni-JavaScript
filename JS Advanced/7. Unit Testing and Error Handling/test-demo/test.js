const sum = require("./myModule.js");

describe("demo test", () => {
  it("works with 5 and 3", () => {
    if (sum(5, 3) != 8) {
      throw Error("Not working as expected");
    }
  });
});
