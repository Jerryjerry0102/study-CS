// 나의 풀이
function merge1(arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    console.log(i, j);
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  if (i === arr1.length) newArr.push(...arr2.slice(j, arr2.length));
  else newArr.push(...arr1.slice(i, arr1.length));
  return newArr;
}

// 솔루션
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

// 나의 풀이
// 졸라 그냥 했는데 됐는데 왜 됐는지 모르겠으면 어쩌지ㅋㅋㅋㅋㅋ
function mergeSort1(arr) {
  if (arr.length < 2) return arr;
  let arr1 = arr.slice(0, arr.length / 2);
  let arr2 = arr.slice(arr.length / 2, arr.length);
  if (arr1.length > 1) arr1 = mergeSort(arr1);
  if (arr2.length > 1) arr2 = mergeSort(arr2);
  let newArr = [];
  while (newArr.length !== arr.length) {
    newArr = merge(arr1, arr2);
    console.log(arr1, arr2, newArr);
  }
  return newArr;
}

// 솔루션
// 하지만 역시 솔루션 코드를 보니 와... 소리가 나오네
// 나는 진짜 일단 막 해서 된 거 였다ㅋㅋㅋㅋㅋ
function mergeSort(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let arr1 = mergeSort(arr.slice(0, mid));
  let arr2 = mergeSort(arr.slice(mid));
  return merge(arr1, arr2);
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));
console.log(mergeSort([50, 100, 10, 1, 2, 99, 14]));
