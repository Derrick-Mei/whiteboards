function truckTour(petrolpumps) {
  /*
   * Write your code here.
   */
  // instantiate needed vars
  let start = 0;
  let current = 0;
  let currentGas = 0;
  let distanceTraveled = 0;

  while (start !== current || distanceTraveled === 0) {
      // console.log(`\n\nstart !== current: ${start !== current} distance === 0: ${distanceTraveled === 0}`)
      let gasAtCurrentStation = petrolpumps[current][0]
      let nextStationDistance = petrolpumps[current][1]

      // console.log(`start: ${start}, current: ${current},  curGas: ${currentGas}, distanceT: ${distanceTraveled}`)
      // console.log(`gasAtStation: ${gasAtCurrentStation}, nextDistance: ${nextStationDistance}`)
      // console.log(`enough gas: ${currentGas + gasAtCurrentStation > nextStationDistance}`)
      // if I have enough to move forward
      if (currentGas + gasAtCurrentStation > nextStationDistance) {
          current = current + 1;
          if( current === petrolpumps.length) {
              current = 0;
          }
          distanceTraveled += nextStationDistance;
          currentGas = currentGas + gasAtCurrentStation - nextStationDistance;
          // console.log(`endConditions** start: ${start}, current: ${current}, distanceT: ${distanceTraveled}, curGas: ${currentGas}`)
      } else {
          // If I don't have enough gas move start up
          start++
          // if start is > current then assign current to start and restart calcs
          if (start > current) {
              current = start
              distanceTraveled = currentGas = 0;
          } else {
          // else subtract distance and current gas
              currentGas -= (petrolpumps[start-1][0] - petrolpumps[start-1][1])
              distanceTraveled -= petrolpumps[start-1][1]
          }
          // console.log(`endConditions** start: ${start}, current: ${current}, distanceT: ${distanceTraveled}, curGas: ${currentGas}`)
      }
  }

  return start;
}

let arr = [[10,5], [1,6], [1,2], [3,1]]
let arr2 = [[1,5], [10,3], [3,4]]
let arr3 = [[0,5], [9,1], [10, 10], [1,4], [6,1]]

truckTour(arr)
truckTour(arr2)
truckTour(arr3)