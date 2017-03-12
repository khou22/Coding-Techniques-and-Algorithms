var original = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // Original array

// Shuffle using Knuth shuffle method (garunteed linear time)
// Makes a new array object
var knuthShuffle = function(ray) {
  var shuffled = new Array(ray.length); // New array of length
  for (var i = 0; i < shuffled.length; i++) { // Instantiate new object
    shuffled[i] = ray[i]; // Copy items
  }

  // Iterate through array with index i
  // Pick integer r between 0 and i uniformly at random
  for (var i = 0; i < ray.length; i++) {
    var r = Math.round((Math.random() * i)); // Random number: [0, i)
    // Swap a[r] and a[i]
    var temp = ray[r]; // Store element at r
    shuffled[r] = shuffled[i]; // Copy i to r
    shuffled[i] = temp; // Copy r to i
  }

  return shuffled; // Return array
}

console.log(original); // Original array
console.log(knuthShuffle(original)); // Shuffled array
