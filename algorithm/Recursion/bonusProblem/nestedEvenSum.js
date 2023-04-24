// 나의 풀이
// Helper 메소드 재귀 //
// flatten 문제 활용 //
function nestedEvenSum(obj) {
  let evenSum = 0;
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] instanceof Object) helper(Object.values(helperInput[0]));
    else if (helperInput[0] % 2 === 0) evenSum += helperInput[0];
    helper(helperInput.slice(1));
  }
  helper(Object.values(obj));
  return evenSum;
}

// 솔루션
// 순수 재귀 //
function nestedEvenSum2(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
