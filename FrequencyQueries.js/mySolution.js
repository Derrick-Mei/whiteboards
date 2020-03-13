function incrementOrDecrement(hash, value, increment = true) {

  if (increment) {
      if(hash[value]) {
          hash[value]++;
      } else {
          hash[value] = 1;
      }
  } else {
      if(hash[value]) {
          hash[value]--
      }
  }
}

function freqQuery(queries) {
  const numberCount = {};
  const frequencyCount = {};

  const answer = [];

  for (let arr of queries) {
      let operation = arr[0];
      let value = arr[1];

      if (operation === 1) {
          incrementOrDecrement(frequencyCount, numberCount[value], false)
          incrementOrDecrement(numberCount, value)
          incrementOrDecrement(frequencyCount, numberCount[value])
      }
      else if (operation === 2) {
          incrementOrDecrement(frequencyCount, numberCount[value], false)
          incrementOrDecrement(numberCount, value, false)
          incrementOrDecrement(frequencyCount, numberCount[value])
      }
      else if (operation === 3) {
          answer.push(frequencyCount[value] ? 1 : 0)
      }
  }

  return answer;

}