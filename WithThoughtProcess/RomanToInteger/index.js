/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let answer = 0;
  let storage = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for(let i=0; i<s.length; i++) {
    const current = storage[s[i]];
    const next = storage[s[i+1]];

    if(next > current) {
      answer-=current;
    } else {
      answer+=current;
    }
  }
  return answer;
};

console.log(romanToInt("MCMXCIV"))