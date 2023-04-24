// 나의 풀이, 솔루션
// Helper 메소드 재귀 //
function collectStrings(obj) {
  const arr = [];
  function gatherStrings(input) {
    for (const key in input) {
      if (input[key] instanceof Object) gatherStrings(input[key]);
      else if (typeof input[key] === "string") arr.push(input[key]);
    }
  }
  gatherStrings(obj);
  return arr;
}

// 솔루션
// 순수 재귀 //
function collectStrings1(obj) {
  let stringsArr = [];
  for (const key in obj) {
    if (typeof obj[key] === "string") stringsArr.push(obj[key]);
    else if (typeof obj[key] === "object")
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
  }
  return stringsArr;
}

const obj = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])
