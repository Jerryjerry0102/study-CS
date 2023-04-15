// 나의 풀이 - 최신 문법 사용 //
/**
const countUniqueValues = (arr) => {
  const uniqueValues = new Set(arr);
  return uniqueValues.size;
};
*/

// 나의 풀이 //
/**
const countUniqueValues = (arr) => {
  let pointer1 = 0;
  let pointer2 = 0;
  let count = 0;
  while (pointer2 < arr.length) {
    pointer2 = pointer1 + 1;
    if (arr[pointer1] !== arr[pointer2]) count++;
    pointer1++;
  }
  return count;
};
*/

const countUniqueValues1 = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
