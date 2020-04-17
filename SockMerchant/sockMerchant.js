function sockMerchant(n, ar) {
  let numPairs = 0;

  let map = {};

  for (let color of ar) {
      if (map.hasOwnProperty(color)) {
          if (map[color]) {
              numPairs+=1;
              map[color] = false;
          } else {
              map[color] = true;
          }
      } else {
          map[color] = true;
      }
  }

  return numPairs;

}
