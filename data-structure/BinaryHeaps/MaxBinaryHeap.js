class MaxBinaryHeap {
  constructor() {
    this.values = [55, 39, 41, 18, 27, 12, 33];
  }

  insert(val) {
    this.values.push(val);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let value = this.values[idx];
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentValue = this.values[parentIdx];
      if (value <= parentValue) break;
      this.values[parentIdx] = value;
      this.values[idx] = parentValue;
      idx = parentIdx;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    while (2 * idx + 1 < this.values.length) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let childIdx =
        this.values[leftChildIdx] > (this.values[rightChildIdx] || 0)
          ? leftChildIdx
          : rightChildIdx;
      let value = this.values[idx];
      let childValue = this.values[childIdx];
      if (value > childValue) break;
      this.values[idx] = childValue;
      this.values[childIdx] = value;
      idx = childIdx;
    }
  }
}

const heap = new MaxBinaryHeap();
console.log(heap);
