const { expect, assert } = require("chai");
const HolidayPackage = require("./Project");

describe("HolidayPackage tests", function () {
  beforeEach(function () {
    holiday = new HolidayPackage("Italy", "Summer");
});
  describe("Testing the constructor", () => {
    it("base stats", () => {
      expect(holiday.destination).to.equal("Italy");
      expect(holiday.season).to.equal("Summer");
    });
  });
  describe("Testing the get and set", () => {
    it("not being a boolean", () => {
      expect(() => holiday.insuranceIncluded = 'true').to.throw("Insurance status must be a boolean")
    })
    it("having the base value (false) for insurance", () => {
      expect(holiday.insuranceIncluded).to.equal(false);
    });
    it("having true for insurance", () => {
      holiday.insuranceIncluded = true;
      expect(holiday.insuranceIncluded).to.equal(true);
    });
  });
  describe("Testing showVacationers", () => {
    it("testing with 0 people", () => {
      expect(holiday.showVacationers()).to.equal("No vacationers are added yet");
    });
    it("testing with 2 people", () => {
      holiday.addVacationer("Peter Peterov")
      holiday.addVacationer("John Johnson")
      expect(holiday.showVacationers()).to.equal("Vacationers:\nPeter Peterov\nJohn Johnson");
    });
  });
  describe("Testing addVacationer", () => {
    it("correct params", () => {
      expect(holiday.addVacationer("Peter Park")).to.equal();
    })
    it("wrong params", () => {
      expect(() => holiday.addVacationer(" ")).to.throw("Vacationer name must be a non-empty string");
      expect(() => holiday.addVacationer("Peter")).to.throw("Name must consist of first name and last name");
    })
  });
  describe("Testing generateHolidayPackage", () => {
    it("correct params for Summer without insurance", () => {
      holiday.addVacationer("Peter Park")
      expect(holiday.generateHolidayPackage("Peter Park")).to.equal("Holiday Package Generated\nDestination: Italy\nVacationers:\nPeter Park\nPrice: 600");
    })
    it("correct params for Fall with insurance", () => {
      holiday.season = "Fall"
      holiday.insuranceIncluded = true
      holiday.addVacationer("Peter Park")
      expect(holiday.generateHolidayPackage("Peter Park")).to.equal("Holiday Package Generated\nDestination: Italy\nVacationers:\nPeter Park\nPrice: 500");
    })
    it("correct params for Fall without insurance", () => {
      holiday.season = "Fall"
      holiday.addVacationer("Peter Park")
      expect(holiday.generateHolidayPackage("Peter Park")).to.equal("Holiday Package Generated\nDestination: Italy\nVacationers:\nPeter Park\nPrice: 400");
    })
    it("wrong params", () => {
      expect(() => holiday.generateHolidayPackage()).to.throw("There must be at least 1 vacationer added");
    })
  });
});

