class Stack {
    constructor() {
      this.items = [];
    }

    push(item) {
      console.log("stack push")
      this.items.push(item);
    }

    pop() {
      if (this.items.length) {
        console.log("stack pop")
        return this.items.pop();
      }
      return null;
    }

    peek() {
      if (this.items.length) {
        console.log('stack peeking')
        console.log("stack peek: ", this.items[this.items.length-1])
      }
      return null;
    }
  }


  class MaxStack extends Stack {
    constructor() {
      super()
      this.maxStack = [];
      this.max = undefined;
    }

    push2(item) {
      this.items.push(item);
      if (item > this.max || !this.max) this.max = item;

      for (let i=0; i<=this.maxStack.length; i++) {
        if (this.maxStack[i] < item ){
          null;
        }else{
          return this.maxStack.splice(i, 0, item)
        }
      }
    }

    pop2(item) {
      const poppedNumber = this.items.pop()
      // for (let i=0; i<this.maxStack.length; i++) {
      //   if (this.maxStack[i] === poppedNumber ) {
      //     this.maxStack.splice(i,1)
      //   }
      // }

      // this.maxStack.splice(this.maxStack.indexOf(poppedNumber),1)


      function binarySearch (list, value) {
        // initial values for start, middle and end
        let start = 0
        let stop = list.length - 1
        let middle = Math.floor((start + stop) / 2)

        // While the middle is not what we're looking for and the list does not have a single item
        while (list[middle] !== value && start < stop) {
          if (value < list[middle]) {
            stop = middle - 1
          } else {
            start = middle + 1
          }

          // recalculate middle on every iteration
          middle = Math.floor((start + stop) / 2)
        }

        // if the current middle item is what we're looking for return it's index, else return -1
        return (list[middle] !== value) ? -1 : middle
      }

      this.maxStack.splice(binarySearch(this.maxStack, poppedNumber), 1)
    }

    peekMaxStack() {
      return this.maxStack[this.maxStack.length-1]
    }

    peekMax(){
      return this.max;
    }
  }