const { expect, assert } = require("chai");
const lookupChar = require("./Project");

describe ('lookupChar', () => {
  it('first param is not a string or second param is not a number', () => {
    assert.isUndefined(lookupChar(1, 1))
    assert.isUndefined(lookupChar('abc', 1.2))
    assert.isUndefined(lookupChar('abc', 'a'))
  })

  it('params are correct but the index is incorrect', () => {
    assert.equal(lookupChar('abv', -1), "Incorrect index")
    assert.equal(lookupChar('abv', 4), "Incorrect index")
  })

  it('correct params', () => {
    assert.equal(lookupChar('abv', 0), "a")
    assert.equal(lookupChar('abv', 2), "v")
  })
})
