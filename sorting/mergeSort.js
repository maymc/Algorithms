//let testArr = [5, 3, 8, 4, 1, 9, 6];

function mergeSort(arr) {
  console.log("CHECK - array: ", arr);

  let middle = Math.floor(arr.length / 2);
  console.log("DEBUG - middle index: " + middle + " // middle element: ", arr[middle]);

  let left = [];
  let right = [];

  //If there is only one element in the array, it is already sorted
  if (arr.length <= 1) {
    console.log("----->This is single element. It is sorted<--------");
    return arr;
  }
  else {
    //Split the array in half
    left = arr.slice(0, middle);
    console.log("CHECK - LEFT Half: ", left);

    right = arr.slice(middle);
    console.log("CHECK - RIGHT Half: ", right);
  }

  console.log("~~~~~~~~~~~~~~~");
  return merge(mergeSort(left), mergeSort(right));
}

// mergeSort(testArr);

function merge(leftArr, rightArr) {
  let sorted = [];

  //While the left array and right array both have elements in them
  while (leftArr.length !== 0 && rightArr.length !== 0) {
    if (leftArr[0] <= rightArr[0]) {
      //If the left element is smaller than the right element, shift it out of the array and push it into the sorted array
      sorted.push(leftArr.shift());
    }
    else {
      //else, if the right element is greater than the left element, shift it out of the array and put it into the sorted array
      sorted.push(rightArr.shift());
    }
  }

  //While the right array is empty, add the rest of the left array elements to the sorted array
  while (leftArr.length !== 0) {
    sorted.push(leftArr.shift());
  }

  //While the left array is emptyk add the rest of the right array elements to the sorted array
  while (rightArr.length !== 0) {
    sorted.push(rightArr.shift());
  }

  // console.log(sorted);

  //Return the sorted left and right halves
  return sorted;
}

module.exports = mergeSort;

