// 나의 풀이 //
/** 
const maxSubarraySum = (array, n) => {
  if (n > array.length) return null;
  const arr = [];
  for (let i = 0; i < array.length - n + 1; i++) {
    arr.push(array.slice(i, n + i));
  }
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    let curSum = arr[i].reduce((prev, cur) => {
      return prev + cur;
    }, 0);
    if (maxSum < curSum) maxSum = curSum;
  }
  return maxSum;
};
*/

// a native solution //
// time complexity - O(n^2)
/** 
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  // -Infinity로 max 초기값을 설정하면
  // arr가 모두 음수로 구성되어 있을 경우 가장 큰 합이 음수로 나올 수 있다.
  // 양수로만 작업을 하지 않는 한 0에서 시작하는 것은 도움이 되지 않는다.
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
*/

// refactor //
// time complexity - O(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
