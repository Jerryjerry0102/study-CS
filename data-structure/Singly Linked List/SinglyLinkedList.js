class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constsructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Pushing : Adding a new node to the end of the Linked List!
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length += 1;
    }
    return this;
  }
  // Popping: Removing a node from the end of the Linked List!
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let prev = current;
    while (current.next) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  // Shifting: Removing a new node from the beginning of the Linked List!
  shift() {
    if (!this.head) return undefined;
    const current = this.head;
    this.head = current.next;
    this.length -= 1;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  // Unshifting: Adding a new node to the beginning of the Linked List!
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length += 1;
    }
    return this;
  }

  // Get: Retrieving a node by it’s position in the Linked List!
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current = this.head;
    let counter = 0;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }
  // Set: Changing the value of a node based on it’s position in the Linked List
  set(index, val) {
    const foundNode = this.get(index);
    if (!foundNode) return false;
    foundNode.val = val;
    return true;
  }
}

const list = new SinglyLinkedList();
