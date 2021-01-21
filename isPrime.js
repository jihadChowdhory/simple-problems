// This Program is define weather a number is prime or not
function isPrime(n) {
  for (let i = 2; i <= n - 1; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
// Test Case
console.log(isPrime(5));