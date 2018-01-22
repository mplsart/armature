var expect = require("chai").expect;

function add(a, b) {
    return a + b;
}


describe("Color Code Converter", function() {
  describe("RGB to Hex conversion", function() {
    it("converts the basic colors", function() {
        expect(add(1, 2)).to.equal(3);
    });
  });

  describe("Hex to RGB conversion", function() {
    it("converts the basic colors", function() {
        expect(add(5, 6)).to.equal(11);
    });
  });
});