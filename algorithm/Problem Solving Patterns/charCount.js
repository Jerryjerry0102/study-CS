/**
 * Write a function which takes in a string and returns counts of each character in the string.
 */

// function charCount(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     if (/[a-z0-9]/.test(char)) {
//       if (obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }
//   return obj;
// }

function charCount1(str) {
  let obj = {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// 정규표현식보다 문자 코드를 사용하는 것이 더 효율적
function charCount2(str) {
  let obj = {};
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric(0-9)
    !(code > 64 && code < 91) && // upper alpha(A-Z)
    !(code > 96 && code < 123) // lower alpha(a-z)
  ) {
    return false;
  }
  return true;
}

console.time("regexp");
console.log(charCount1("Hello hi!"));
console.timeEnd("regexp");

console.time("charCode");
console.log(charCount2("Hello hi!"));
console.timeEnd("charCode");
