// 나의 풀이
// Helper 메소드 재귀 //
function capitalizeWords1(arr) {
  const newArr = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    newArr.push(helperInput[0].toUpperCase());
    helper(helperInput.slice(1));
  }
  helper(arr);
  return newArr;
}

// 순수 재귀 //
function capitalizeWords2(arr) {
  let newArr = [];
  if (arr.length === 0) return newArr;
  newArr.push(arr[0].toUpperCase());
  newArr = newArr.concat(capitalizeWords(arr.slice(1)));
  return newArr;
}

// 솔루션
// 순수 재귀 //
function capitalizeWords(array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

console.log(capitalizeWords(["car", "taco", "rabbit"]));
