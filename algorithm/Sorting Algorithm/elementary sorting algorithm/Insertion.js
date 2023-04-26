// 나의 풀이
function insertion1(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      console.log(arr, i, j);
      if (arr[i] < arr[j]) {
        console.log("swap!");
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i = j;
      } else break;
    }
  }
  return arr;
}

// 솔루션
// better than me
// 현재값을 변수에 저장해 두었기 때문에 내 풀이처럼 i를 바꾸지 않아도 됌
function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log(arr, i, j);
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
    }
  }
  return arr;
}

console.log(insertion([2, 1, 9, 76, 4]));
