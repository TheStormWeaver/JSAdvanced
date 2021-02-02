const { expect } = require("chai");
const isSymmetric = require("./5.CheckforSymmetry");

describe("isSymmetric", () => {
  it('return true for valid symmetric input', () => {
    expect(isSymmetric([1, 1])).to.equal(true)
  })

  it('returns false for valid non-symmetric input', () => {
    expect(isSymmetric([1, 2])).to.equal(false)
  })

  it('returns false for invalid input', () => {
    expect(isSymmetric('a')).to.equal(false)
  })

  //test overloading
  it('give three parameters', () =>{
    expect(isSymmetric([1, 1, 1])).to.equal(true)
  })

  it('returns false for valid string input', () => {
    expect(isSymmetric(['a', 'a'])).to.equal(true)
  })

  it('returns false for invalid string input', () => {
    expect(isSymmetric(['a', 'b'])).to.equal(false)
  })

  it('returns false for different types of elements', () => {
    expect(isSymmetric(['1', 1])).to.equal(false)
  })
})
