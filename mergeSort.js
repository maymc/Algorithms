let testArr = [5, 3, 8, 4, 1, 9, 6];
let testArr2 = [];

function mergeSort(arr) {
  let left = [];
  let right = [];
  let middle = 0;
  let tempElem = 0;

  if (arr.length === 1) {
    return arr;
  } else {
    //check the split index
    middle = Math.floor(arr.length / 2);

    left = arr.slice(0, middle);
    right = arr.slice(middle);

    console.log("left: ", left);
    console.log("right: ", right);

    mergeSort(left);
    if (left.length === 1) {
      testArr2.push(left);
      console.log("testArr2: ", testArr2);
    }
    mergeSort(right);
    if (right.length === 1) {
      testArr2.push(right);
      console.log("testArr2: ", testArr2);
    }
  }

  for (let i = 0; i < testArr2.length; i++) {
    console.log(testArr2[0]);
    // if (testArr2[i] > testArr2[i + 1]) {
    //   let pairs = [];
    //   tempElem = testArr2[i];
    //   testArr2[i] = testArr2[i + 1];
    //   pairs.push(testArr2[i]);
    //   testArr2[i + 1] = tempElem;
    //   pairs.push(testArr2[i + 1]);

    //   console.log(pairs);
    // }
  }
}

mergeSort(testArr);
