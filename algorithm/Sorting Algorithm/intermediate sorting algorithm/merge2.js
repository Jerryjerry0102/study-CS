const A = [4, 5, 1, 3, 2];

// A[l..m]과 A[m+1..r]을 병합하여 A[l..r]을 오름차순 정렬된 상태로 만든다.
// A[l..m]과 A[m+1..r]은 이미 오름차순으로 정렬되어 있다.
const mergeSort = (arr, left, right) => {
  if (left < right) {
    let mid = Math.floor((left + right) / 2);
    mergeSort(arr, left, mid); // 전반부 정렬
    mergeSort(arr, mid + 1, right); // 후반부 정렬
    merge(arr, left, mid, right); // 병합
  }
};

const merge = (arr, l, m, r) => {
  let tempArr = [];
  let t = 0;
  let i = l;
  let j = m + 1;
  while (i <= m && j <= r) {
    if (arr[i] <= arr[j]) tempArr[t++] = arr[i++];
    else tempArr[t++] = arr[j++];
  }
  while (i <= m) tempArr[t++] = arr[i++]; // 왼쪽 배열 부분이 남은 경우
  while (j <= r) tempArr[t++] = arr[j++]; // 오른쪽 배열 부분이 남은 경우

  i = l;
  t = 0;
  // 결과를 A[l..r]에 저장
  while (i <= r) arr[i++] = tempArr[t++];
};

mergeSort(A, 0, A.length - 1);
console.log(A);
