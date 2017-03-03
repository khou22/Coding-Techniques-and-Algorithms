// Setup stream array with only one missing element
var N = 4;
var missing = 3;
var stream = [];
for (var i = 0; i < N; i++) {
  if (i + 1 != missing) { // If not the missing element
    stream.push(i + 1); // Add element
  }
}
// Print problem
console.log(stream);
console.log("What is the missing number between 1 and " + N + "?");
console.log(); // Line break

// Solution
var sum = 0;
for (var i = 0; i < stream.length; i++) {
  sum += stream[i]; // Sum
}
var actualSum = (N * (N + 1)) / 2; // Sum of all numbers between 1 and N
var missingNumber = actualSum - sum;

console.log("Missing number: " + missingNumber);
console.log("Performance: linear time");

// Challenge: Two numbers missing
