// 나의 풀이 //
/** 
function isPalindrome(str) {
  function helper(str) {
    if (str.length <= 1) return str;
    return helper(str.slice(1)) + str[0];
  }
  const reverse = helper(str);
  return str === reverse;
}
*/

// 솔루션
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
