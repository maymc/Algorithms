let testArr = [5, 3, 8, 4, 1, 9, 6];
// let testArr2 = [];
// let sorted = [];

// function mergeSort(arr) {
//   let left = [];
//   let right = [];
//   let middle = 0;

//   if (arr.length === 1) {
//     return arr;
//   } else {
//     middle = Math.floor(arr.length / 2);

//     left = arr.slice(0, middle);
//     console.log("left: ", left);
//     mergeSort(left);
//     if (left.length === 1) {
//       testArr2.push(left);
//       console.log("testArr2: ", testArr2);
//     }

//     right = arr.slice(middle);
//     console.log("right: ", right);
//     mergeSort(right);
//     if (right.length === 1) {
//       testArr2.push(right);
//       console.log("testArr2 here: ", testArr2);
//     }
//   }

//   //take the first 2 elements and compare them
//   if (testArr2[0] > testArr2[1]) {
//     let temp = testArr2[0];
//     testArr2[0] = testArr2[1];
//     testArr2[1] = temp;

//     let shifted = testArr2.shift();
//     sorted.push(shifted);

//     shifted = testArr2.shift();
//     sorted.push(shifted);
//   }
//   console.log(testArr2);
//   console.log(sorted);
// }
let singles = [];

function mergeSort(arr) {
  let arrayCopy = arr.slice(0);
  console.log("CHECK - array copy: ", arrayCopy);

  let middle = Math.floor(arrayCopy.length / 2);
  console.log(
    "DEBUG - middle index: " + middle + " // middle element: ",
    arrayCopy[middle]
  );

  let left = [];
  let right = [];

  //If there is only one element in the array, it is already sorted
  if (arrayCopy.length <= 1) {
    console.log("----->This is single element. It is sorted<--------");
    singles.push(arrayCopy);
    console.log(singles);
    return arrayCopy;
  }
  //Else
  else {
    //Split the array in half

    left = arrayCopy.slice(0, middle);
    console.log("CHECK - LEFT Half: ", left);

    right = arrayCopy.slice(middle);
    console.log("CHECK - RIGHT Half: ", right);
  }

  console.log("~~~~~~~~~~~~~~~");
  mergeSort(left);
  mergeSort(right);
}

mergeSort(testArr);
