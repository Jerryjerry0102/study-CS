// 나의 풀이
function stringifyNumbers1(obj) {
  let newObj = JSON.parse(JSON.stringify(obj));
  function helper(helperInput) {
    for (const key in helperInput) {
      if (typeof helperInput[key] === "number")
        helperInput[key] = String(helperInput[key]);
      else if (typeof helperInput[key] === "object") {
        helper(helperInput[key]);
      }
    }
  }
  helper(newObj);
  return newObj;
}

// 솔루션
// this is better
function stringifyNumbers(obj) {
  let newObj = {};
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (obj[key] instanceof Object) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/
