const { expect, assert } = require("chai");
const numberOperations = require("./Project");

describe("numberOperations Tests", function () {
  it ("powNumber Tests", () => {
    expect(numberOperations.powNumber(2)).to.equal(4)
    expect(numberOperations.powNumber(-2)).to.equal(4)
    expect(numberOperations.powNumber(200)).to.equal(40000)
  })
  it ("numberChecker Tests", () => {
    expect(() => numberOperations.numberChecker(NaN)).to.throw('The input is not a number!')
    expect(() => numberOperations.numberChecker('lol')).to.throw('The input is not a number!')
    expect(numberOperations.numberChecker(50)).to.equal('The number is lower than 100!')
    expect(numberOperations.numberChecker(120)).to.equal('The number is greater or equal to 100!')
    expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!')
  })
  it ("sumArrays Tests", () => {
    expect(numberOperations.sumArrays([20, 10], [100, 1])).to.deep.equal([120, 11])
    expect(numberOperations.sumArrays([1], [2])).to.deep.equal([3])
    expect(numberOperations.sumArrays([1], [2,3,4])).to.deep.equal([3, 3, 4])
    expect(numberOperations.sumArrays([1, 1, 1, 1], [2,3,4])).to.deep.equal([3, 4, 5, 1])
    expect(numberOperations.sumArrays([1, 1, 1], [2,3,4, 1])).to.deep.equal([3, 4, 5, 1])
  })
});
