var original = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Original array
var shuffled = original.slice(); // New array to be shuffled (slice copies the array, not just the reference)

// Shuffle using Knuth shuffle method (linear time)
// Iterate through array with index i
// Pick integer r between 0 and i uniformly at random
for (var i = 0; i < shuffled.length; i++) {
  var r = Math.round((Math.random() * i)); // Random number: [0, i)

  // Swap a[r] and a[i]
  var temp = shuffled[r]; // Store element at r
  shuffled[r] = shuffled[i]; // Copy i to r
  shuffled[i] = temp; // Copy r to i
}

console.log(original);
console.log(shuffled);
