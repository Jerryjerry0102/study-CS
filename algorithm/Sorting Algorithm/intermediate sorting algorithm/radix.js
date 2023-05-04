// radix helper 함수 : getDigit, digitCount, mostDigits
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// console.log(getDigit(2354, 1));

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// console.log(digitCount(2354));

function mostDigits(nums) {
  let maxDigitCount = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigitCount = Math.max(maxDigitCount, digitCount(nums[i]));
  }
  return maxDigitCount;
}
// console.log(mostDigits([1234, 56, 7]));

// radixSort
function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);
  let buckets = [];
  for (let k = 0; k < maxDigitCount; k++) {
    buckets = Array.from({ length: 10 }, () => []);
    for (let num of nums) {
      const digit = getDigit(num, k);
      buckets[digit].push(num);
    }
    // nums = buckets.flat();
    nums = [].concat(...buckets);
  }
  return nums;
}

console.log(radixSort([123, 746, 45, 7, 92, 33, 2083, 1345]));
