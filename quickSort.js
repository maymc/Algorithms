let testArr = [5, 3, 8, 4, 1, 9];

function quickSort(arr) {
  console.log(arr);
  let pivot = arr[0];
  let left = [];
  let right = [];
  // console.log("pivot: " + pivot);

  if (arr.length <= 1) {
    // console.log("array only length 1");
    return arr;
  } else {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        // console.log("partitioning~~");
        left.push(arr[i]);
        // console.log("-->left: ", left);
      } else {
        // console.log("partitioning~~");
        right.push(arr[i]);
        // console.log("-->right: ", right);
      }
      // console.log("new array: ", left.concat(pivot, right));
    }
    //   console.log("FOR LOOP END----------");
    //   if (left.length > 1) {
    //     quickSort(left);
    //   }
    //   if (right.length > 1) {
    //     quickSort(right);
    //   }
    // }
    // console.log("final left: ", left);
    // console.log("pivot: ", pivot);
    // console.log("final right: ", right);
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(testArr));
