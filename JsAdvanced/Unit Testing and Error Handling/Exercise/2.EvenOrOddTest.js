const { expect, assert } = require("chai");
const isOddOrEven = require("./2.EvenOrOdd");

describe('isOddOrEven', () => {
  it('Type is string', () => {
    expect(isOddOrEven(1)).to.equal(undefined)
  })

  it('Is even', () => {
    expect(isOddOrEven('a')).to.equal('odd')
  })
  
  it('Is odd', () => {
    expect(isOddOrEven('aa')).to.equal('even')
  })
})
