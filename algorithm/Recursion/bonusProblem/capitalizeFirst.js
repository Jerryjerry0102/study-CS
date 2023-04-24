// 나의 풀이
// Helper 메소드 재귀 //
function capitalizeFirst1(arr) {
  const newArr = [];
  function helper(helperInput) {
    if (helperInput.length === 0) return;
    const capital = helperInput[0][0].toUpperCase();
    newArr.push(capital + helperInput[0].slice(1));
    helper(helperInput.slice(1));
  }
  helper(arr);
  return newArr;
}

// 솔루션
// 순수 재귀 //
function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']
