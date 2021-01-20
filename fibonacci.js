// Way one for finding Fibonacci Number

function findFibo(n) {
  var fibo = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
  }
  return fibo;
}

// This is simple test case
console.log(findFibo(12));