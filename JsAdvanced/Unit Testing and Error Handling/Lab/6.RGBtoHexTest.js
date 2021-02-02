const { expect } = require("chai");
const rgbToHexColor = require("./6.RGBtoHex");

describe("rgbToHexColor", () => {
  it("converts black to Hex", () => {
    expect(rgbToHexColor(0, 0, 0)).to.equal("#000000");
  });

  it("converts white to Hex", () => {
    expect(rgbToHexColor(255, 255, 255)).to.equal("#FFFFFF");
  });

  it("converts red to Hex", () => {
    expect(rgbToHexColor(255, 0, 0)).to.equal("#FF0000");
  });

  it("converts green to Hex", () => {
    expect(rgbToHexColor(0, 255, 0)).to.equal("#00FF00");
  });

  it("converts blue to Hex", () => {
    expect(rgbToHexColor(0, 0, 255)).to.equal("#0000FF");
  });

  it("return undefined for string params", () => {
    expect(rgbToHexColor("a","a","a")).to.equal(undefined);
  });

  it("return undefined for negative params", () => {
    expect(rgbToHexColor(0,0,-1)).to.equal(undefined);
  });

  it("return undefined for value grater than 255", () => {
    expect(rgbToHexColor(0,0,256)).to.equal(undefined);
  });

  //test overloading
  it("converts a specific color to hex (puprple)", () => {
    expect(rgbToHexColor(151, 104, 172)).to.equal("#9768AC");
  });

  it("converts a specific color to hex (green)", () => {
    expect(rgbToHexColor(42, 173, 170)).to.equal("#2AADAA");
  });

});
