// 나의 풀이
// 똥멍청이
function selection1(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = [arr[i], i];
    console.log(arr, min, i);
    for (let j = i; j < arr.length; j++) {
      if (min[0] > arr[j + 1]) min = [arr[j + 1], j + 1];
    }
    if (arr[i] !== min[0]) {
      console.log("swap");
      arr[min[1]] = arr[i];
      arr[i] = min[0];
    }
  }
  return arr;
}

// 솔루션
function selection2(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[minIdx] > arr[j + 1]) minIdx = j + 1;
    }
    // 최솟값이 처음에 시작한 값이 아니라면
    if (i !== minIdx) {
      const temp = arr[i];
      arr[i] = arr[minIdx];
      arr[minIdx] = temp;
      // [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }
  return arr;
}

// 솔루션
// es2015 문법(swap)
function selection(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[i], arr[minIdx]] = [arr[minIdx], arr[i]]);

  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[minIdx] > arr[j + 1]) minIdx = j + 1;
    }
    // 최솟값이 처음에 시작한 값이 아니라면
    if (i !== minIdx) swap(arr, i, minIdx);
  }
  return arr;
}

console.log(selection([19, 5, 3, 43, 24]));
