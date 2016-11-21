var array = [1, 2, 3, 4, 5, 6];

var average = function(array) {
  var sum = 0; // Store running sum
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }

  return sum/array.length; // Return average
}

console.log(average(array));
