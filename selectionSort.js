let testArr = [5, 3, 8, 4, 1, 9, 2, 10, 7, 6, 33, 25];

function selectionSort(arr) {
  console.log("Unsorted array: ", arr);

  //Initialize variables
  let minElem = null;
  let leftMost = null;
  let saveMinIndex = null;

  //Iterate through unsorted array and sort it
  for (let j = 0; j < arr.length; j++) {
    //Set the left most array element of the unsorted array as the starting point.
    leftMost = arr[j];
    //Assume that the left most element is the minimum element and save that index
    minElem = leftMost;
    saveMinIndex = j;

    //Iterate through the unsorted array
    for (let i = j; i < arr.length; i++) {
      //If the current minimum element is greater than or equal to the next array element, set the next array element as the new minimum element.
      if (minElem >= arr[i + 1]) {
        minElem = arr[i + 1];

        //Save the new minimum element's index for the final swap at the end when you swap the left most element with the minimum element of the current unsorted array.
        saveMinIndex = i + 1;
      }
    }

    //Once the minimum element of the unsorted array is found, swap it with the left most element
    arr[saveMinIndex] = leftMost;
    arr[j] = minElem;

    console.log("new array: ", arr);
    console.log("~~~~~~~~~~~~~~~~~~~");
  }
  return arr;
}

console.log("sorted array: ", selectionSort(testArr));
