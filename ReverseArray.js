var array = [1, 2, 3, 4, 5, 6, 7];

var reverse = function(array) {
  for (var i = 0; i < array.length / 2; i++) {
    var old = array[i]; // Store first
    array[i] = array[array.length - 1 - i]; // Copy second into first
    array[array.length - 1 - i] = old; // Store first in second
  }

  return array; // Return reversed array
}

console.log(reverse(array));
