// This is a way to convert inch to feet
function inchToFeet(inch) {
  const feet = inch / 12;
  const result = feet.toFixed(2);
  return result;
}
// Test case
console.log(inchToFeet(100));