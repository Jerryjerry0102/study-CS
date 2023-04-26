function bubble(arr) {
  let noSwaps = false;
  for (let i = arr.length - 1; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        noSwaps = false;
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log("One pass complete!");
    if (noSwaps) break;
  }
  return arr;
}

bubble([8, 1, 2, 3, 4, 5, 6, 7]);
