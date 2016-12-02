// December 2, 2016
// Gets all primes up to a certain number

var maxPrime = 2 * Math.pow(10, 6); // All primes larger than this number

var primes = []; // Empty array of primes
var currentNumber = 2; // Number checking for prime (0, 1 are not primes)
var latestPrime = 0;

var startTime = new Date(); // Current time as start time

while (latestPrime < maxPrime) {
  var prime = true;
  var index = 0;
  while (prime) {
    if (index >= primes.length) {
      // If cycled through all primes, conclude is prime

      // console.log("Found prime: " + currentNumber);
      primes.push(currentNumber); // Add to list
      latestPrime = currentNumber; // Store latest prime value

      prime = false; // Terminate while loop
    }
    if (currentNumber % primes[index] == 0) {
      // If divisible by a prime
      prime = false;
    }

    index++; // Advance
  }

  currentNumber++; // Check for next prime
}

var endTime = new Date(); // Time when program finishes
var runTime = (endTime - startTime) / 1000; // Run time in seconds
console.log("Runtime: " + runTime);

// console.log(primes[primes.length - 1]); // Print out last prime
