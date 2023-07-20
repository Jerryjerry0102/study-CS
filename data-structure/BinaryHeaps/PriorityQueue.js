class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const node = new Node(val, priority);
    this.values.push(node);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let value = this.values[idx];
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentValue = this.values[parentIdx];
      if (value.priority >= parentValue.priority) break;
      this.values[parentIdx] = value;
      this.values[idx] = parentValue;
      idx = parentIdx;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
  sinkDown() {
    let idx = 0;
    while (true) {
      let childIdx;
      let leftChildIdx = 2 * idx + 1;
      if (leftChildIdx >= this.values.length) break;
      let rightChildIdx = 2 * idx + 2;
      if (rightChildIdx >= this.values.length) childIdx = leftChildIdx;
      else {
        childIdx =
          this.values[leftChildIdx].priority <
          this.values[rightChildIdx].priority
            ? leftChildIdx
            : rightChildIdx;
      }
      let value = this.values[idx];
      let childValue = this.values[childIdx];
      if (value.priority <= childValue.priority) break;
      this.values[idx] = childValue;
      this.values[childIdx] = value;
      idx = childIdx;
    }
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

const queue = new PriorityQueue();
queue.enqueue("common cold", 5);
queue.enqueue("gunshot wound", 1);
queue.enqueue("high fever", 4);
queue.enqueue("broken arm", 2);
queue.enqueue("glass in foot", 3);

console.log(queue);
queue.dequeue();
console.log(queue);
