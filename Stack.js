class Stack {

    constructor() {
        this.a = new Array(2); // New array
        this.size = 0; // Set initial size
    }

    getSize() {
        return this.size;
    }

    // Reize array if need be
    resizeArray() {
        if (this.size == this.a.length) { // If full
            var newArray = new Array(this.a.length * 2); // Double size

            // Copy items over
            for (var i = 0 ; i < this.a.length; i++) {
                newArray[i] = this.a[i]; // Copy items
            }

            this.a = newArray; // Set new array
        } else if (this.size == this.a.length / 4) { // If quarter full
            var newArray = new Array(this.a.length / 2); // Halve size

            // Copy items over
            for (var i = 0; i < newArray.length; i++) {
                newArray[i] = this.a[i];
            }

            this.a = newArray; // Set new array
        }
    }

    // Enqueue the item
    enqueue(item) {
        this.resizeArray(); // Check resize

        this.size++; // Increment size
        this.a[this.size] = item; // Add item to array
    }

    // Dequeue the last item added
    dequeue() {
        if (this.size <= 0) { // If no items to dequeue
            return null;
        }

        var toDequeue = this.a[this.size]; // Save item to dequeue
        this.size += -1; // Decrease size
        this.resizeArray(); // Check resize

        return toDequeue;
    }

    // Peak at the top of the stack without dequeing
    peak() {
        if (this.size <= 0) { // If no items to peak at
            return null;
        }

        return this.a[this.size];
    }
}

// ***************   Unit testing   ***************
var testStack = new Stack();

testStack.enqueue("One");
testStack.enqueue("Two");
testStack.enqueue("Three");

console.log(testStack.dequeue()); // Three
console.log(testStack.peak()); // Two
console.log(testStack.dequeue()); // Two

testStack.enqueue("Four");
testStack.enqueue("Five");

console.log(testStack.peak()); // Five
console.log(testStack.dequeue()); // Five
console.log(testStack.dequeue()); // Four

console.log(testStack.getSize()); // 1
console.log(testStack.dequeue()); // One

console.log(testStack.dequeue()); // Null
