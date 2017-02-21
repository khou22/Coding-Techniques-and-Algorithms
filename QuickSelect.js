var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Data set
var k = 5; // Fifth lowest number

// Shuffle array
var shuffle = function(shuffled) {
  for (var i = 0; i < shuffled.length; i++) {
    var r = Math.round((Math.random() * i)); // Random number: [0, i)

    // Swap a[r] and a[i]
    var temp = shuffled[r]; // Store element at r
    shuffled[r] = shuffled[i]; // Copy i to r
    shuffled[i] = temp; // Copy r to i
  }
}

var partition = function(a, low, high) {
  var k = low;
  console.log("Partition: " + a[k]);
  var i = low;
  var j = high + 1;

  while (true) {

    // Find the lowest item on the left to swap
    while (a[++i] < a[k]) {
      if (i == high) break; // If at the end of array
    }

    // Find the highest item on the right to swap
    while (a[--j] > a[k]) {
      if (j == low) break;
    }

    if (i >= j) break;

    // console.log("Swapping:", a[i], "and", a[j]);
    var buffer = a[i];
    a[i] = a[j];
    a[j] = buffer;
    // console.log(a);
  }

  // console.log("Swapping:", a[low], "and", a[j]);
  var buffer = a[low];
  a[low] = a[j];
  a[j] = buffer;
}

shuffle(a);
shuffle(a);
console.log(a);
partition(a, 0, 9);
console.log(a);
