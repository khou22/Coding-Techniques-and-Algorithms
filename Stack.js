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
    push(item) {
        this.resizeArray(); // Check resize

        this.size++; // Increment size
        this.a[this.size] = item; // Add item to array
    }

    // Dequeue the last item added
    pop() {
        if (this.size <= 0) { // If no items to pop
            return null;
        }

        var toDequeue = this.a[this.size]; // Save item to pop
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

testStack.push("One");
testStack.push("Two");
testStack.push("Three");

console.log(testStack.pop()); // Three
console.log(testStack.peak()); // Two
console.log(testStack.pop()); // Two

testStack.push("Four");
testStack.push("Five");

console.log(testStack.peak()); // Five
console.log(testStack.pop()); // Five
console.log(testStack.pop()); // Four

console.log(testStack.getSize()); // 1
console.log(testStack.pop()); // One

console.log(testStack.pop()); // Null
