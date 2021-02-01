const { expect } = require("chai");
const sum = require("./4.sumOfNums");

describe("Sum Numbers", () => {
  it("sums single num", () => {
    expect(sum([1])).to.equal(1)
  })

  // Test Overloading
  it("sums multiple nums", () => {
    expect(sum([1, 1])).to.equal(2)
  })
  
  it("sums diffrent nums", () => {
    expect(sum([2, 3, 4])).to.equal(9)
  })
});
