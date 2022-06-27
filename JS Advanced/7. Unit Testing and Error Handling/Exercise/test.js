const { expect } = require("chai");
const { isOddOrEven, lookupChar, mathEnforcer } = require("./Exercise");

describe("test isOddOrEven function", () => {
  it("test invalid input with passing different types", () => {
    expect(isOddOrEven(5)).to.be.undefined;
    expect(isOddOrEven({})).to.be.undefined;
    expect(isOddOrEven([])).to.be.undefined;
  });

  it("test if odd is returned", () => {
    expect(isOddOrEven("asd")).to.be.equal("odd");
  });
  it("test if even is returned", () => {
    expect(isOddOrEven("asdf")).to.be.equal("even");
    expect(isOddOrEven("")).to.be.equal("even");
  });
});

describe("test lookupChar(str, index) function", function () {
  it("should return undefined on lookupChar(2, 2)", () => {
    expect(lookupChar(2, 2)).to.equal(undefined);
  });

  it('should return undefined on lookupChar("test", "2")', () => {
    expect(lookupChar("test", "2")).to.equal(undefined);
  });

  it('should return undefined on lookupChar("test", 1.23)', () => {
    expect(lookupChar("test", 1.23)).to.equal(undefined);
  });

  it('should return Incorrect index on lookupChar("test", 25)', () => {
    expect(lookupChar("test", 25)).to.equal("Incorrect index");
  });

  it('should return Incorrect index on lookupChar("hello", -4)', () => {
    expect(lookupChar("hello", -4)).to.equal("Incorrect index");
  });

  it('should return Incorrect index on lookupChar("hello", 5)', () => {
    expect(lookupChar("hello", 5)).to.equal("Incorrect index");
  });

  it('should return "o" on lookupChar("hello", 4)', () => {
    expect(lookupChar("hello", 0)).to.equal("o"); // Failing test
  });

  it('should return "l" on lookupChar("hello", 3)', () => {
    expect(lookupChar("hello", 3)).to.equal("l");
  });
});

describe("test mathEnforcer function ", () => {
  




});
