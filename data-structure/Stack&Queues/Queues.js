class Node {
  val;
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // Enqueue: Adding to the beginning of the Queue!
  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }
  // Dequeue: Removing from the beginning of the Queue!
  dequeue() {
    if (this.size === 0) return null;
    const temp = this.first;
    if (this.size === 1) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

const queue = new Queue();
console.log(queue.enqueue("hi"));
console.log(queue.dequeue());
console.log(queue);
