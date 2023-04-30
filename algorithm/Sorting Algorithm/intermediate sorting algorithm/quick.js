function pivot(arr, start = 0, end = arr.length - 1) {
  // ES2015 버전 //
  // const swap = (arr, idx1, idx2) => {
  //   [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  // };
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  const pivot = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotIdx++;
      swap(arr, i, pivotIdx);
    }
  }
  swap(arr, start, pivotIdx);
  return pivotIdx;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIdx = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIdx - 1);
    // right
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}

console.log(quickSort([100, 81, 42, 18, 95, 72, 6, 13])); // 4;
