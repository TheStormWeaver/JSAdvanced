const { expect, assert } = require("chai");
const mathEnforcer = require("./Project");

describe("mathEnforcer", () => {
  describe("addFive", () => {
    it("inputs that are not numbers", () => {
      assert.isUndefined(mathEnforcer.addFive("a"));
      assert.isNaN(mathEnforcer.addFive(NaN));
    });
    it("inputs that are correct", () => {
      assert.equal(mathEnforcer.addFive(0), 5);
      assert.equal(mathEnforcer.addFive(-10), -5);
      assert.equal(mathEnforcer.addFive(1.2), 6.2);
    });
  });

  describe("subtractTen", () => {
    it("inputs that are not numbers", () => {
      assert.isUndefined(mathEnforcer.subtractTen("a"));
      assert.isNaN(mathEnforcer.subtractTen(NaN));
    });
    it("inputs that are correct", () => {
      assert.equal(mathEnforcer.subtractTen(100), 90);
      assert.equal(mathEnforcer.subtractTen(-5), -15);
      assert.equal(mathEnforcer.subtractTen(10.2), 0.1999999999999993);
      assert.equal(mathEnforcer.subtractTen(1), -9);
    });
  });

  describe("sum", () => {
    it("inputs that are not numbers", () => {
      assert.isUndefined(mathEnforcer.sum("1", 1));
      assert.isUndefined(mathEnforcer.sum(1, "2"));
    });
    it("inputs that are correct", () => {
      assert.equal(mathEnforcer.sum(1, 1), 2);
      assert.equal(mathEnforcer.sum(1, -1), 0);
      assert.equal(mathEnforcer.sum(-1, -1), -2);
      assert.equal(mathEnforcer.sum(-1.2, -1.3), -2.5);
    });
  });
});
