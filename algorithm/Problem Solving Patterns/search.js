// 나의 풀이 + a native solution //
// time complexity - o(n)
// Linear Search
// 이 구조를 선형 탐색이라고 한다.
/** 
const search = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};
*/

// refactor //
// time complexity - log(n)
// binary Search
// 이진 탐색은 분할 정복 알고리즘이다
const search = (array, val) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (currentElement < val) {
      min = middle + 1;
    } else if (currentElement > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
};

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); // -1
