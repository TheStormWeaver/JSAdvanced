const { expect, assert } = require("chai");
const isOddOrEven = require("./2.EvenOrOdd");

describe('isOddOrEven', () => {
  it('Type is string', () => {
    assert.isUndefined(isOddOrEven(1), 'Message a==a')
  })

  it('Is even', () => {
    assert.equal(isOddOrEven('aa'),'even', 'Message a==a')
  })
  
  it('Is even', () => {
    assert.equal(isOddOrEven('a'),'odd', 'Message a==a')
  })
})
