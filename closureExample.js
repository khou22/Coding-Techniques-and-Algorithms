/*
  This is an example of a closure
  December 2, 2016
  Part of an interview at Moat in New York City
*/
var makeIncrementor = function() {

  var counter = 0;

  // The function that's returned when the reference is called
  return function() {
    counter++;
    console.log(counter);
  }
}
