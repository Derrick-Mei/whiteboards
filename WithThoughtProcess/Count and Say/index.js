/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";

  let answer = "1";

  // iterate it n-1 times
  for (let i = 1; i < n; i++) {
    let iteration = "";
    let count = 0;
    let int = "";

    for (let number of answer) {
      if (number !== int && count > 0) {
        iteration += count + int;
        count = 1;
      } else {
        count++;
      }
      int = number;
    }
    answer = iteration + count + int;
  }
  return answer;
};

console.log(countAndSay(3))