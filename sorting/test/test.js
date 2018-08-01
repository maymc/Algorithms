//var assert = require("assert");
const chai = require("chai");
chai.should();
var expect = chai.expect;
var assert = chai.assert;

//Bubble Sort tests
var bubbleSort = require("../bubbleSort.js");

console.log(bubbleSort);

describe("bubbleSort()", function () {
  it("should return a sorted array", function () {
    let results = bubbleSort([3, 2, 1]);
    console.log(results);
    expect(results).to.deep.equal([1, 2, 3]);
  });
  it("should return a sorted array", function () {
    let results = bubbleSort([5, 3, 8, 4, 1, 9]);
    console.log(results);
    expect(results).to.deep.equal([1, 3, 4, 5, 8, 9]);
  });
  it("should return a sorted array", function () {
    let results = bubbleSort([4, 7, 1, 8, 6, 2, 25, 10]);
    console.log(results);
    expect(results).to.deep.equal([1, 2, 4, 6, 7, 8, 10, 25]);
  });
});

//Quick Sort tests
var quickSort = require("../quickSort.js");

console.log(quickSort);

describe("quickSort()", function () {
  it("should return a sorted array", function () {
    let results = quickSort([4, 2, 7, 1, 9]);
    console.log(results);
    expect(results).to.deep.equal([1, 2, 4, 7, 9]);
  });
  it("should return a sorted array", function () {
    let results = quickSort([9, 3, 6, 2, 4, 7, 8]);
    console.log(results);
    expect(results).to.deep.equal([2, 3, 4, 6, 7, 8, 9]);
  });
  it("should return a sorted array", function () {
    let results = quickSort([12, 5, 55, 32, 60, 1, 6]);
    console.log(results);
    expect(results).to.deep.equal([1, 5, 6, 12, 32, 55, 60]);
  });
});

//Merge Sort tests
var mergeSort = require("../mergeSort.js");

console.log(mergeSort);

describe("mergeSort()", function () {
  it("should return a sorted array", function () {
    let results = quickSort([3, 5, 6, 2, 7]);
    console.log(results);
    expect(results).to.deep.equal([2, 3, 5, 6, 7]);
  });
  it("should return a sorted array", function () {
    let results = quickSort([1, 6, 7, 9, 3, 5]);
    console.log(results);
    expect(results).to.deep.equal([1, 3, 5, 6, 7, 9]);
  });
  it("should return a sorted array", function () {
    let results = quickSort([123, 56, 4, 1, 7, 25]);
    console.log(results);
    expect(results).to.deep.equal([1, 4, 7, 25, 56, 123]);
  });
})

//Insertion Sort tests
var insertionSort = require("../insertionSort.js");

console.log(insertionSort);

describe("insertionSort()", function () {
  it("should return a sorted array", function () {
    let results = insertionSort([5, 2, 8, 4, 6, 1, 9]);
    console.log(results);
    expect(results).to.deep.equal([1, 2, 4, 5, 6, 8, 9]);
  });
  it("should return a sorted array", function () {
    let results = insertionSort([6, 4, 3, 7, 3, 8, 1]);
    console.log(results);
    expect(results).to.deep.equal([1, 3, 3, 4, 6, 7, 8]);
  });
  it("should return a sorted array", function () {
    let results = insertionSort([35, 74, 24, 754, 33, 56, 2]);
    console.log(results);
    expect(results).to.deep.equal([2, 24, 33, 35, 56, 74, 754]);
  });
});

//Selection Sort tests
var selectionSort = require("../selectionSort.js");

console.log(selectionSort);

describe("selectionSort()", function () {
  it("should return a sorted array", function () {
    let results = selectionSort([4, 2, 5, 1]);
    console.log(results);
    expect(results).to.deep.equal([1, 2, 4, 5]);
  });
  it("should return a sorted array", function () {
    let results = selectionSort([2, 4, 1, 6, 4, 8, 2, 5, 3]);
    console.log(results);
    expect(results).to.deep.equal([1, 2, 2, 3, 4, 4, 5, 6, 8]);
  });
  it("should return a sorted array", function () {
    let results = selectionSort([68, 31, 45, 16, 48, 35]);
    console.log(results);
    expect(results).to.deep.equal([16, 31, 35, 45, 48, 68]);
  });
});
