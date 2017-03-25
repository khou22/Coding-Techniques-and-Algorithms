var original = [2, 9, 5, 6, 1, 4, 0, 8, 3, 7]; // Original array

var SelectionSort = function(ray) {
  // Create new array object
  var sorted = new Array(ray.length); // New array of length
  for (var i = 0; i < sorted.length; i++) { // Instantiate new object
    sorted[i] = ray[i]; // Copy items
  }

  for (var i = 0; i < sorted.length; i++) {
    var lowest = sorted[i] // Set initial lowest
    var lowestIndex = i // Initial index

    for (var j = i; j < sorted.length; j++) {
      // Find any that are lower in the rest of the array
      var current = sorted[j]; // Reference to current item
      if (current <= lowest) { // First item that is lower
        lowest = current; // Save lowest
        lowestIndex = j; // Save lowest index
      }
    }

    // Swap
    var temp = sorted[i];
    sorted[i] = lowest;
    sorted[lowestIndex] = temp;
  }

  // MARK - Array is now sorted
  return sorted;
}

var sorted = SelectionSort(original);
console.log(original);
console.log(sorted);
