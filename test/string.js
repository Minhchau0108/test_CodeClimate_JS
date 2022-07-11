const expect = require("chai").expect;
require("../src/index");
describe("String extension tests", function () {
  describe("isQuestion", function () {
    it("Should return true if given a question", function () {
      expect("To be or not to be, that is the question".isQuestion()).to.equal(
        false
      );
      expect("Quis custodiet ipsos custodes?".isQuestion()).to.equal(true);
    });
  });
});
