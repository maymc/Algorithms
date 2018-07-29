//let testArr = [5, 3, 8, 4, 1, 9];

function quickSort(arr) {
  console.log(arr);
  let pivot = arr[0];
  let left = [];
  let right = [];

  if (arr.length <= 1) {
    return arr;
  } else {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

//console.log(quickSort(testArr));

module.exports = quickSort;
