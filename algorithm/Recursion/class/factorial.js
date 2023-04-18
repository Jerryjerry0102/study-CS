// recursion
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

// loop
/**
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
*/
