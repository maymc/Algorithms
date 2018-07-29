//var assert = require("assert");
const chai = require("chai");
chai.should();
var expect = chai.expect;
var assert = chai.assert;

var bubbleSort = require("../bubbleSort.js");

console.log(bubbleSort);

describe("bubbleSort()", function() {
  it("should return a sorted array", function() {
    let results = bubbleSort([3, 2, 1]);
    console.log(results);
    expect(results).to.deep.equal([1, 2, 3]);
  });
  it("should return a sorted array", function() {
    let results = bubbleSort([5, 3, 8, 4, 1, 9]);
    console.log(results);
    expect(results).to.deep.equal([1, 3, 4, 5, 8, 9]);
  });
  it("should return a sorted array", function() {
    let results = bubbleSort([4, 7, 1, 8, 6, 2, 25, 10]);
    console.log(results);
    expect(results).to.deep.equal([1, 2, 4, 6, 7, 8, 10, 25]);
  });
});

var quickSort = require("../quickSort.js");

console.log(quickSort);

describe("quickSort()", function() {
  it("should return a sorted array", function() {
    let results = quickSort([3, 2, 1]);
    console.log(results);
    expect(results).to.deep.equal([1, 2, 3]);
  });
  it("should return a sorted array", function() {
    let results = quickSort([5, 3, 8, 4, 1, 9]);
    console.log(results);
    expect(results).to.deep.equal([1, 3, 4, 5, 8, 9]);
  });
  it("should return a sorted array", function() {
    let results = quickSort([4, 7, 1, 8, 6, 2, 25, 10]);
    console.log(results);
    expect(results).to.deep.equal([1, 2, 4, 6, 7, 8, 10, 25]);
  });
});

var insertionSort = require("../insertionSort.js");

console.log(insertionSort);

describe("insertionSort()", function() {
  it("should return a sorted array", function() {
    let results = insertionSort([3, 2, 1]);
    console.log(results);
    expect(results).to.deep.equal([1, 2, 3]);
  });
  it("should return a sorted array", function() {
    let results = insertionSort([5, 3, 8, 4, 1, 9]);
    console.log(results);
    expect(results).to.deep.equal([1, 3, 4, 5, 8, 9]);
  });
  it("should return a sorted array", function() {
    let results = insertionSort([4, 7, 1, 8, 6, 2, 25, 10]);
    console.log(results);
    expect(results).to.deep.equal([1, 2, 4, 6, 7, 8, 10, 25]);
  });
});

var selectionSort = require("../selectionSort.js");

console.log(selectionSort);

describe("selectionSort()", function() {
  it("should return a sorted array", function() {
    let results = selectionSort([3, 2, 1]);
    console.log(results);
    expect(results).to.deep.equal([1, 2, 3]);
  });
  it("should return a sorted array", function() {
    let results = selectionSort([5, 3, 8, 4, 1, 9]);
    console.log(results);
    expect(results).to.deep.equal([1, 3, 4, 5, 8, 9]);
  });
  it("should return a sorted array", function() {
    let results = selectionSort([4, 7, 1, 8, 6, 2, 25, 10]);
    console.log(results);
    expect(results).to.deep.equal([1, 2, 4, 6, 7, 8, 10, 25]);
  });
});
