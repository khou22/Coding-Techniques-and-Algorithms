class Queue {

  class Node {
    this.value;
    this.next;
  }

  constructor() {
    this.size = 0; // Set initial size
  }

  getSize() {
    return this.size; // Return size
  }

  // Enqueue the item
  enqueue(item) {
    this.size++; // Increment size
  }

  // Dequeue the last item added
  dequeue() {
    if (this.size <= 0) { // If no items to dequeue
      return null;
    }

    this.size += -1; // Decrease size
  }

  // Peak at the queue without dequeing
  peak() {
    if (this.size <= 0) { // If no items to peak at
      return null;
    }
  }
}

// ***************   Unit testing   ***************
var testQueue = new Queue();

testQueue.enqueue("One");
testQueue.enqueue("Two");
testQueue.enqueue("Three");

console.log(testQueue.dequeue()); // Three
console.log(testQueue.peak()); // Two
console.log(testQueue.dequeue()); // Two

testQueue.enqueue("Four");
testQueue.enqueue("Five");

console.log(testQueue.peak()); // Five
console.log(testQueue.dequeue()); // Five
console.log(testQueue.dequeue()); // Four

console.log(testQueue.getSize()); // 1
console.log(testQueue.dequeue()); // One

console.log(testQueue.dequeue()); // Null
