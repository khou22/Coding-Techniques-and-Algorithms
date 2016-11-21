var check = function(input) {

  // Check for input length > 9
  if (input.length > 9) {
    return 2;
  }

  /*** Binary search - log(n) run time ***/
  var keywords = ["blue", "green", "orange", "pink", "purple", "red", "turquoise", "yellow"];

  // Bounds of binary search
  var minIndex = 0;
  var maxIndex = keywords.length - 1;

  while (minIndex <= maxIndex) {
    // Define index
    var index = Math.round((minIndex + maxIndex) / 2); // Middle of range

    // Set lower bound
    if (input > keywords[index]) { // Input is higher than current element
      minIndex = index + 1;
    } else if (input < keywords[index]) {
      maxIndex = index - 1;
    } else {
      // Found item
      return 1;
    }
  }

  // If can't find index
  return 3;
}
