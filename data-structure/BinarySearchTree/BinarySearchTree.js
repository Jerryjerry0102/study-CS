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

  // Tree Traversal
  BFS() {
    const queue = [];
    const datas = [];
    queue.push(this.root);
    while (queue.length !== 0) {
      const dequeuedNode = queue.shift();
      datas.push(dequeuedNode.val);
      if (dequeuedNode.left) queue.push(dequeuedNode.left);
      if (dequeuedNode.right) queue.push(dequeuedNode.right);
    }
    return datas;
  }
  DFS() {}
}

const tree = new BinarySearchTree();
