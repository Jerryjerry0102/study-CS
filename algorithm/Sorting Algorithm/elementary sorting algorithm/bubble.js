function bubble1(arr) {
  // 차라리 i를 비교해야 하는 숫자로 생각해보자
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        // swap!
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log("One pass complete!");
  }
  return arr;
}

function bubble2(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap!
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubble2([37, 45, 29, 8]));
