/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const numbers = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };
  const operators = { "-": "-", "+": "" };

  let stringAnswer = "";
  let reachedNumbers = false;
  let hasOperator = false;

  for (let letter of str) {
    console.log(letter);

    if (reachedNumbers && !numbers.hasOwnProperty(letter)) break;

    if (letter === " ") continue;

    if (operators.hasOwnProperty(letter)) {
      if (!hasOperator) {
        if (letter === "-") {
          stringAnswer += "-";
        }
        reachedNumbers = true;
        hasOperator = true;
      } else {
        return 0;
      }
    } else if (numbers.hasOwnProperty(letter)) {
      stringAnswer += letter;
      reachedNumbers = true;
    } else {
      break;
    }
  }

  console.log(stringAnswer);
  if (stringAnswer === "-" || stringAnswer === "") return 0;
  const number = Number(stringAnswer);

  if (number < -2147483648) return -2147483648;
  if (number > 2147483647) return 2147483647;

  return number;
};
