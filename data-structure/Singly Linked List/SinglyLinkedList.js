class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
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
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
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
    this.length--;
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
    this.length--;
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
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
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
  // Insert: Adding a node to the Linked List at a specific position
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) this.push(val);
    else if (index === 0) this.unshift(val);
    else {
      const newNode = new Node(val);
      const foundNode = this.get(index - 1);
      newNode.next = foundNode.next;
      foundNode.next = newNode;
      this.length++;
    }
    return true;
  }
  // Remove: Removing a node from the Linked List at a specific position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  // Reverse: Reversing the Linked List in place!
  print() {
    // 단순히 reverse가 잘 됐는지 확인하기 위한 메소드
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
  reverse() {
    // node: 현재 노드, next: 그 다음 노드, prev: 연결하려는 노드의 앞 노드
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null; // tail의 next가 null이기 때문
    for (let i = 0; i < this.length; i++) {
      next = node.next; // 27
      node.next = prev; // null
      prev = node;
      node = next;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push("hi");
list.push("hello");
list.push("hallo");
list.push("chao");
list.print();
list.reverse();
list.print();
