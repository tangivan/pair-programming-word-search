const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word 'FRANK' is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word 'SEINFIELD' is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("VERTICAL TEST: should return true if the word 'ASYLUM' is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['L', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['U', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['M', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ASYLUM')

    assert.isTrue(result);
  });

  it("VERTICAL TEST: should return false if the word 'ASYLUM' is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['F', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['U', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['M', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ASYLUM')

    assert.isFalse(result);
  });

  it("REVERSE HORIZONTAL TEST: should return true if the word 'LADY' is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Y', 'D', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['F', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['U', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['M', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'LADY')

    assert.isTrue(result);
  });

  it("REVERSE HORIZONTAL TEST: should return FALSE if the word 'LADY' is NOT present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'C', 'D', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['F', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['U', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['M', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'LADY')

    assert.isFalse(result);
  });

  it("REVERSE VERTICAL TEST: should return true if the word 'ANYONE' is present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'C', 'D', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'E', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'N', 'U', 'A', 'L'],
      ['F', 'M', 'J', 'T', 'O', 'V', 'R', 'G'],
      ['U', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['M', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ANYONE')

    assert.isTrue(result);
  });

  it("REVERSE VERTICAL TEST: should return false if the word 'ANYONE' is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'C', 'D', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'N', 'U', 'A', 'L'],
      ['F', 'M', 'J', 'T', 'O', 'V', 'R', 'G'],
      ['U', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['M', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'ANYONE')

    assert.isFalse(result);
  });
});
