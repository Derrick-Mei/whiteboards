function truckTour(petrolpumps) {
  /*
   * Write your code here.
   */
  let netGas = petrolpumps.map(element => {
      return element[0] - element[1];
  })

  let startIndex = 0;
  let currentIndex = 0;
  let net = 0;

  while (startIndex < netGas.length) {
      let currentNet = netGas[currentIndex]
      if (currentNet + net > 0) {
          net = net + currentNet;
          currentIndex = ++currentIndex%netGas.length

          if (startIndex === currentIndex ) return startIndex
      } else {
          startIndex++
          if (startIndex > currentIndex) {
              currentIndex = startIndex;
              net = 0;
          } else {
              net -= netGas[startIndex-1]
          }
      }
  }
  return startIndex
}

let arr = [[10,5], [1,6], [1,2], [3,1]]

truckTour(arr)