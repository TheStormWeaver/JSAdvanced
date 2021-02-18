const { expect, assert } = require("chai");
const dealership = require("./Project");

describe("Dealership tests", function () {
  describe("newCarCost Tests", function (){
    it("Testing with a old car", function (){
      expect(dealership.newCarCost("Audi A4 B8", 20000)).to.equal(5000)
      expect(dealership.newCarCost("Audi A4 B8", 10000)).to.equal(-5000)
    })
    it("Testing without a old car", function (){
      expect(dealership.newCarCost("", 20000)).to.equal(20000)
    })
  })

  describe("carEquipment", function (){
    it("Testing with extras", function (){
      expect(dealership.carEquipment(["Stuff", "More stuff"], [0])).to.deep.equal(["Stuff"])
      expect(dealership.carEquipment(["Stuff0", "Stuff1", "Stuff2"], [1, 2])).to.deep.equal(["Stuff1", "Stuff2"])
    })
  })

  describe("euroCategory", function (){
    it("Category lower then 4", function (){
      expect(dealership.euroCategory(3)).to.equal("Your euro category is low, so there is no discount from the final price!")
    })
    it("Category that is >= 4", function (){
      expect(dealership.euroCategory(4)).to.equal("We have added 5% discount to the final price: 14250.")
    })
  })
});
