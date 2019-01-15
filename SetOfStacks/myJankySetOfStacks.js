class SetOfStacks{
    constructor(value) {
      this.storage = [];
      this.maxStackSize = value
    }
    push(x) {
      return this.storage.push(x)
    }
    pop(){
      return this.storage.pop()
    }
    popAt(index) {
      let indexToRemove;
      if (index === this.getStackSize()-1) {
        indexToRemove = this.storage.length-1
        }else{
          indexToRemove = index * this.maxStackSize + 2
        }
      let value = this.storage[indexToRemove]
      let copy = this.storage
      copy.splice(indexToRemove, 1)
      this.storage = copy;
      return value
    }
    getStackSize() {
      return Math.ceil(this.storage.length/this.maxStackSize);
    }
  }


  // declare a new `SetOfStacks` where each stack has a capacity of 3
  const stacks = new SetOfStacks(3);

  stacks.push(1);
  stacks.push(2);
  stacks.push(3);
  stacks.push(4);
  stacks.push(5)
  stacks.push(6)

  console.log("stack size 2: ", stacks.getStackSize());   // should print 2

  console.log("popAt 1: ",stacks.popAt(1)); // should print 6
  console.log(stacks)
  console.log(stacks.pop());    // should print 5
  console.log(stacks.pop());    // should print 4

  console.log(stacks.getStackSize());   // should print 1