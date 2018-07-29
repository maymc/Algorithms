//let testArr = [5, 3, 8, 4, 1, 9];

function bubbleSort(arr) {
  console.log("array: " + arr);
  let tempElem = 0;
  let swapCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1] && arr[i + 1] !== null) {
      swapCount++;
      tempElem = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = tempElem;
      console.log(arr);
    }
  }
  console.log("swapCount: " + swapCount);
  if (swapCount === 0) {
    console.log("Sorted Array: " + arr);
    return arr;
  }
  return bubbleSort(arr);
}

// bubbleSort(testArr);

module.exports = bubbleSort;
