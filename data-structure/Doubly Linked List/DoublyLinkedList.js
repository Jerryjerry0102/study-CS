class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null; // 유일한 차이
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Pushing: Adding a node to the end of the Doubly Linked List
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  // Popping: Removing a node from the end of the Doubly Linked List
  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null; // 의사코드에는 설명 없음
    }
    this.length--;
    return poppedNode;
  }
  // Shifting: Removing a node from the beginning of the Doubly Linked List
  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  // Unshifting: Adding a node to the beginning of the Doubly Linked List
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  // Get: Accessing a node in a Doubly Linked List by its position
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let count, current;
    if (idx < Math.floor(this.length / 2)) {
      count = 0;
      current = this.head;
      while (count !== idx) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== idx) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  // Set: Replacing the value of a node to the in a Doubly Linked List
  set(idx, val) {
    const foundNode = this.get(idx);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}

const list = new DoublyLinkedList();
console.log(list);
