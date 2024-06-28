const assert = require("assert");
require("./index");

describe("Testing splitLines() prototype", function() {
  it("should split lines without keeping line breaks", function() {
    const text = "First line\nSecond line\r\nThird line\rFourth line";
    const result = text.splitLines();
    assert.deepStrictEqual(result, ["First line", "Second line", "Third line", "Fourth line"]);
  });

  it("should split lines and keep line breaks", function() {
    const text = "First line\nSecond line\r\nThird line\rFourth line";
    const result = text.splitLines(true);
    assert.deepStrictEqual(result, ["First line\n", "Second line\r\n", "Third line\r", "Fourth line"]);
  });

  it("should handle empty string", function() {
    const text = "";
    const result = text.splitLines();
    assert.deepStrictEqual(result, []);
  });

  it("should handle string without line breaks", function() {
    const text = "String without line breaks";
    const result = text.splitLines();
    assert.deepStrictEqual(result, ["String without line breaks"]);
  });

  it("should handle string with only line breaks", function() {
    const text = "\n\r\n\r";
    const result = text.splitLines();
    assert.deepStrictEqual(result, ["", "", ""]);
  });

  it("should handle string with only line breaks and keep them", function() {
    const text = "\n\r\n\r";
    const result = text.splitLines(true);
    assert.deepStrictEqual(result, ["\n", "\r\n", "\r"]);
  });
});
