// 나의 풀이
/**
function flatten(arr) {
  return arr.flat(Infinity);
}
*/

// 나의 풀이 - 이걸 어떻게 했지?
// Helper 메소드 재귀
function flatten(arr) {
  const newArr = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (Array.isArray(helperInput[0])) helper(helperInput[0]);
    else newArr.push(helperInput[0]);
    helper(helperInput.slice(1));
  }
  helper(arr);
  return newArr;
}

// 솔루션
// 순수 재귀
function flatten(oldArr) {
  var newArr = [];
  for (var i = 0; i < oldArr.length; i++) {
    if (Array.isArray(oldArr[i])) {
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      newArr.push(oldArr[i]);
    }
  }
  return newArr;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
