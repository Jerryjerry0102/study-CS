// 나의 풀이 //
/**
function reverse(str) {
  const result = [];
  function helper(helperString) {
    if (helperString.length === 0) return;
    result.push(helperString[helperString.length - 1]);
    helper(helperString.slice(0, -1));
  }
  helper(str);
  return result.join("");
}
*/

// 솔루션 //
function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("awesome")); // 'emosewa'
