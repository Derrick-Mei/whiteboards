// Min Heap
// A min heap is a binary tree data structure that satisfies the following property: The value of every parent node is less than or equal to the values of their direct children nodes. It follows then that the node at the root of the tree is the element in the heap with the minimal value.

// min heap

// Implement a min heap data structure with at least the following methods:

// insert(item) adds the given item to the heap. Upon insertion, the heap property needs to be maintained.
// delete() removes and returns the root element (the min value) of the heap. Upon deletion, the heap property needs to be maintained.
// getMin() returns the minimal value of the heap in constant time. This method does not remove the minimal value from the heap.
// Examples:

// const heap = new Heap();
// console.log(heap.getMin());    // should print 'undefined'

// heap.insert(5);
// console.log(heap.getMin());   // should print 5

// heap.insert(100);
// console.log(heap.getMin());   // should print 5

// heap.insert(2);
// console.log(heap.getMin());   // should print 2

// console.log(heap.delete());   // should print 2
// console.log(heap.delete());   // should print 5
// console.log(heap.delete());   // should print 100

// console.log(heap.getMin());   // should print 'undefined'
// Analyze the time and space complexity of your implementation.

class MinHeap{
    constructor() {
    this.storage = [];
    }
    insert(value){
      this.storage.push(value)
      let index = this.storage.length-1
      this.bubbleUp(index);
    }

    delete(){
      if(!this.storage.length) return
      if(this.storage.length === 1) return this.storage.pop()
      let min = this.storage[0];
      let endValue = this.storage.pop()
      this.storage[0] = endValue;
      this.siftDown[0]
      return min;
    }

    getMin(){
      return this.storage[0]
    }
    bubbleUp(index){
      let parentIndex = (index-1)/2 | 0
      if (this.storage[parentIndex] > this.storage[index]) {
        [this.storage[parentIndex], this.storage[index]] = [this.storage[index], this.storage[parentIndex]]
        this.bubbleUp(parentIndex)
      }
    }

    siftDown(index){
      let leftChildIndex = index*2+1
      let rightChildIndex = index*2+2
      let minChildIndex;
      if (this.storage[leftChildIndex && this.storage[rightChildIndex]]){
        minChildIndex = this.storage[leftChildIndex] < this.storage[rightChildIndex] ? leftChildIndex : rightChildIndex
      }else{minChildIndex = leftChildIndex }

      [this.storage[minChildIndex], this.storage[index]] = [this.storage[index], this.storage[minChildIndex]]
    }
  }


  const heap = new MinHeap();
  console.log(heap.getMin());    // should print 'undefined'

  heap.insert(5);
  console.log(heap.getMin());   // should print 5

  heap.insert(100);
  console.log(heap.getMin());   // should print 5

  heap.insert(2);
  console.log(heap.getMin());   // should print 2

  console.log(heap.delete());   // should print 2
  console.log(heap.delete());   // should print 5
  console.log(heap.delete());   // should print 100

  console.log(heap.getMin());   // should print 'undefined'