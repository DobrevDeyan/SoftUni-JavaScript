const { expect } = require("chai");
const { sum } = require("./sumOfNums");

describe("Sum Array", () => {
  it("adds numbers", () => {
    expect(sum([1, 4])).to.equal(3);
  });
  it("works with strings", () => {
    expect(sum(["1", "2"])).to.equal(3);
  });
});
