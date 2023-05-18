class Node {
  constructor(val) {
    this.val = val;
    this.prev = null; // Singly Linked List와 유일한 차이
    this.next = null;
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
  // Insert: Adding a node in a Doubly Linked List by a certain position
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === 0) this.unshift(val);
    else if (idx === this.length) this.push(val);
    else {
      const newNode = new Node(val);
      const beforeNode = this.get(idx - 1);
      const afterNode = beforeNode.next;
      newNode.next = afterNode;
      afterNode.prev = newNode;
      newNode.prev = beforeNode;
      beforeNode.next = newNode;
      this.length++;
    }
    return true;
  }
  // Remove: Removing a node in a Doubly Linked List by a certain position
  remove(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();
    const removedNode = this.get(idx);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
  // Reverse: Reversing the Linked List in place!
  print() {
    // Print: 단순히 reverse가 잘 됐는지 확인하기 위한 메소드
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  reverse() {
    // 강의 없이 혼자 한 거라 완벽한지는 모르겠음
    // current: 현재 노드, temp: 그 다음 노드
    let current = this.head;
    const tail = this.head;
    for (let i = 0; i < this.length; i++) {
      const temp = current.next;
      current.next = current.prev;
      current.prev = temp;
      current = temp;
    }
    this.head = this.tail;
    this.tail = tail;
    return this;
  }
}

const list = new DoublyLinkedList();
list.push(0).push(1).push(2).push(3);
list.print();
list.reverse();
list.print();
console.log(list);
