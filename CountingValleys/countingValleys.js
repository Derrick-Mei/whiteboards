function countingValleys(n, s) {
  let altitude = 0;
  let valleys = 0;

  for (let letter of s) {
      if (letter === 'U') {
          altitude += 1;
      }

      else {
          if (altitude === 0) {
              valleys += 1;
          }
          altitude -= 1;
      }
  }

  return valleys


}