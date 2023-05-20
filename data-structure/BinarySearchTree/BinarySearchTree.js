class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    const node = new Node(val);
    if (this.root === null) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else current = current.left;
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = node;
          return this;
        } else current = current.right;
      } else return undefined;
    }
  }
  find(val) {
    if (this.root === null) return undefined;
    let current = this.root;
    while (current) {
      if (val === current.val) return current; // return true
      if (val < current.val) current = current.left;
      else if (val > current.val) current = current.right;
    }
    return false;
  }
}

const tree = new BinarySearchTree();
