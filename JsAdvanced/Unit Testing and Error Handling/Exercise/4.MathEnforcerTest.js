describe("mathEnforcer", () => {
  describe("addFive", () => {
    it("inputs that are not numbers", () => {
      expect(mathEnforcer.addFive("a")).to.equal(undefined)
    });
    it("inputs that are correct", () => {
      expect(mathEnforcer.addFive(0)).to.equal(5)
      expect(mathEnforcer.addFive(-10)).to.equal(-5)
      expect(mathEnforcer.addFive(1.2)).to.equal(6.2)
    });
  });

  describe("subtractTen", () => {
    it("inputs that are not numbers", () => {
      expect(mathEnforcer.subtractTen("a")).to.equal(undefined)
    });
    it("inputs that are correct", () => {
      expect(mathEnforcer.subtractTen(100)).to.equal(90)
      expect(mathEnforcer.subtractTen(-5)).to.equal(-15)
      expect(mathEnforcer.subtractTen(10.2)).to.equal(0.1999999999999993)
      expect(mathEnforcer.subtractTen(1)).to.equal(-9)
    });
  });

  describe("sum", () => {
    it("inputs that are not numbers", () => {
      expect(mathEnforcer.sum("1", 1)).to.equal(undefined)
      expect(mathEnforcer.sum(1, "1")).to.equal(undefined)
    });
    it("inputs that are correct", () => {
      expect(mathEnforcer.sum(1, 1)).to.equal(2)
      expect(mathEnforcer.sum(1, -1)).to.equal(0)
      expect(mathEnforcer.sum(-1, -1)).to.equal(-2)
      expect(mathEnforcer.sum(-1.2, -1.3)).to.equal(-2.5)
    });
  });
});
