// 나의 풀이 //
/**
const sumZero = (arr) => {
  let i = 0;
  let number = arr[i];
  while (number <= 0 && i < arr.length - 1) {
    if (arr.includes(-number)) return [number, -number];
    i++;
  }
  return undefined;
};
*/

// a native solution //
// time complexity : O(n^2)
// space complexity : O(1)
/**
const sumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};
*/

// refactor //
// time complexity : O(n)
// space complexity : O(1)
const sumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};

sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
