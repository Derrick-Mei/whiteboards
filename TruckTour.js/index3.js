function truckTour(petrolpumps) {
  // compare each pump gas vs distance, and see if we can make it to the next
  // figure out if we can make it with our currentGas to the next node
  let start = 0;
  let current = 0;
  let currentGas = 0;
  while (start < petrolpumps.length) {
      // fill up on gas -> add to current gas
      // subtract the gas the gas that it will take to get to the next station
      let gasAmount = petrolpumps[current][0]
      let distance = petrolpumps[current][1]
      currentGas += gasAmount;
      currentGas -= distance;
      if (currentGas < 0) {
          start++;
          current = start;
          currentGas = 0;
          continue;
      }
      current++;
      if (current >= petrolpumps.length) {
          current = 0;
      }
      // how do we know that we've finished?
      if (current === start) {
          return start;
      }
  }
}