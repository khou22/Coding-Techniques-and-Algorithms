class Node {
  constructor() {
    this.value = null;
    this.next = null;
  }
}

class Queue {

  constructor() {
    this.head = null; // No initial
    this.tail = null; // No initial
    this.size = 0; // Set initial size
  }

  getSize() {
    return this.size; // Return size
  }

  // Enqueue the item
  enqueue(item) {
    var toAdd = new Node(); // Create node
    toAdd.value = item;
    toAdd.next = null; // No next items

    if (this.tail == null) { // First item in the queue
      // Because only item in queue, set as first and last item
      this.head = toAdd;
      this.tail = toAdd;

    } else { // Linked list isn't empty
      this.tail.next = toAdd; // Set reference from previous
      this.tail = toAdd; // Set as tail
    }

    this.size++; // Increment size
  }

  // Dequeue the last item added
  dequeue() {
    if (this.size <= 0) { // If no items to dequeue
      return null;
    }

    var toDequeue = this.head; // Store item to remove
    this.head = toDequeue.next; // Set new head

    this.size += -1; // Decrease size

    return toDequeue.value; // Return item
  }

  // Peak at the queue without dequeing
  peak() {
    if (this.size <= 0) { // If no items to peak at
      return null;
    }

    return this.head.value; // Return first item in list
  }
}

// ***************   Unit testing   ***************
var testQueue = new Queue();

testQueue.enqueue("One");
testQueue.enqueue("Two");
testQueue.enqueue("Three");

console.log(testQueue.dequeue()); // One
console.log(testQueue.peak()); // Two
console.log(testQueue.dequeue()); // Two

testQueue.enqueue("Four");
testQueue.enqueue("Five");

console.log(testQueue.peak()); // Three
console.log(testQueue.dequeue()); // Three
console.log(testQueue.dequeue()); // Four

console.log(testQueue.getSize()); // 1
console.log(testQueue.dequeue()); // Five

console.log(testQueue.dequeue()); // Null
