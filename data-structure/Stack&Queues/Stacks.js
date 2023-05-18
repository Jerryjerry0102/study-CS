class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // Pushing: Add a value to the top of the stack!
  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }
    return ++this.size;
  }
  // Pop: Remove a value from the top of the stack!
  pop() {
    if (this.size === 0) return null;
    const temp = this.first;
    if (this.size === 1) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const stack = new Stack();
console.log(stack);
console.log(stack.push(0));
console.log(stack);
stack.push(1);
console.log(stack);
stack.push(2);
console.log(stack);
