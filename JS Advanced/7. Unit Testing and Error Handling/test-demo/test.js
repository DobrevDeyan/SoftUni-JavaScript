const { expect, assert } = require("chai");
// const sum = require("./myModule.js");
const { sum } = require("./myModule.js");

describe("demo test", () => {
  it("works with 5 and 3", () => {
    // if (sum(5, 3) != 8) {
    //   throw Error("Not working as expected");
    // } // generic without chai lib

    // expect(sum(5, 3)).to.equal(8); // same as below
    assert.equal(sum(5, 3), 8);
  });
});
