//let testArr = [5, 3, 8, 4, 1, 9];

function insertionSort(arr) {
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    while (arr[i] > arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;

      if (i !== 0) {
        i--;
      }
      console.log("-->", arr);
    }
  }
  return arr;
}

//console.log(insertionSort(testArr));

module.exports = insertionSort;
