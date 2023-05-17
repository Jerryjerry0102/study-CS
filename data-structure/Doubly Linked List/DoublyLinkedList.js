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
}
