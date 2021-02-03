const { expect, assert } = require("chai");
const lookupChar = require("./Project");

describe ('lookupChar', () => {
  it('first param is not a string', () => {
    expect(lookupChar(1, 1)).to.equal(undefined)
  })

  it('second param is not a number', () => {
    expect(lookupChar('abv', 'a')).to.equal(undefined)
    expect(lookupChar('abv', 1.2)).to.equal(undefined)
  })

  it('params are correct but the index is incorrect', () => {
    expect(lookupChar('abc', 4)).to.equal("Incorrect index")
    expect(lookupChar('abc', -1)).to.equal("Incorrect index")
  })

  it('correct params', () => {
    expect(lookupChar('abc', 0)).to.equal('a')
    expect(lookupChar('abc', 2)).to.equal('c')
  })
})
