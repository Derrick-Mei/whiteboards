// Given a Stack class like the following:
class Stack {
  constructor() {
    this.storage = [];
  }

  push(item) {
    this.storage.push(item);
  }

  pop() {
    return this.storage.pop();
  }

  peek() {
    return this.storage[this.storage.length - 1];
  }

  isEmpty() {
    return this.storage.length === 0;
  }

  printContents() {
    this.storage.forEach(elem => console.log(elem));
  }
}

// Write a function sortStack that receives a stack of integers and
// returns another stack containing those same integers in sorted order.
// You may use at most one additional stack to hold items, but you may not
// copy the elements into any other data structure.

function sortStack(inputStack) {
  const outputStack = new Stack()
  while (!inputStack.isEmpty()) {
    // pop the top one off the stack, store that in a temp var
    const tempVar = inputStack.pop();
    if (outputStack.isEmpty() || outputStack.peek() > tempVar) {
      outputStack.push(tempVar);
    } else {
      while (outputStack.peek() < tempVar) {
        inputStack.push(outputStack.pop());
      }
      outputStack.push(tempVar)
    }
  }

  return outputStack;
  // compare the temp var to the top of the outputStack, if the temp is smaller than the top of the other stack
  // then we add it
  // or check if the other stack is empty
    // add this to the other stack
    // and we're done
  // if it's not smaller, then we pop off the second stack until temp is smaller than the top OR output stack is empty
    // then add this to other stack

  // repeat
}

// O(n) space complexity
// O(n^2) time complexity


const s = new Stack();
s.push(4);
s.push(10);
s.push(8);
s.push(5);
s.push(1);
s.push(6);

const sortedStack = sortStack(s); // sortedStack is also a Stack instance

sortedStack.printContents();  // should print 1, 4, 5, 6, 8, 10