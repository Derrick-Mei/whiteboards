/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  // have answer var which is initialized with first word

  // loop over strs array starting with word 2
  // find where word in array stops matching answer var and slice answer var

  // if length = 0 return or return at end
  let answer = strs[0] || "";

  for (let i = 1; i < strs.length; i++) {
    const currentWord = strs[i];
    for (let j = 0; j < answer.length; j++) {
      if (answer[j] !== currentWord[j]) answer = answer.slice(0, j);
    }
  }
  return answer;
};


