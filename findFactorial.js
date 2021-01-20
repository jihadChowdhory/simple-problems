// Way 1 to find the factorial

function factorialOf(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
// This is a test case
const result1 = factorialOf(5);
console.log(result1);

// Way 2 to find the factorial

function anotherWay(n) {
  let result = 1;
  let i = 1;
  while (i <= n) {
    result = result * i;
    i++;
  }
  return result;
}
// This is a test case
const result2 = anotherWay(5);
console.log(result2)

// Way 3 to find the factorial
function recursiveWay(n) {
  if (n == 0) {
    return 1;
  }
  else {
    return n * recursiveWay(n - 1);
  }
}
// This is a test case
const result3 = recursiveWay(5);
console.log(result);