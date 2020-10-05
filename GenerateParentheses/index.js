/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  const answer = [];

  function builder(leftParens, rightParens, string) {
    if (leftParens > rightParens) return;

    if (leftParens === 0 && rightParens === 0) return answer.push(string);

    if (leftParens > 0) builder(leftParens - 1, rightParens, string + "(");
    if (rightParens > 0) builder(leftParens, rightParens - 1, string + ")");
  }

  builder(n, n, "");
  return answer;
};

/*
this is a n^2 solution.  For every additional bracket pair, you have both the left and right sides to place
for a well-formed parentheses, going left to right, open/left parens always happen first
therefore, one of the terminal cases is if there are fewer rightParens than leftParens

as you build the parensString, each iteration is iterated twice as you need to add both left and right.

optimizing
if we are out of brackets, then push the string to the answer array.

if there are left brackets remaining, you can always add a left bracket
if there are more leftBracket than rightBracket, then you add a rightBracket
*/

var generateParenthesis = function (n) {
  const answer = [];

  function builder(leftParens, rightParens, string) {
    // if (leftParens > rightParens) return;

    if (leftParens === 0 && rightParens === 0) return answer.push(string);

    if (leftParens > 0) builder(leftParens - 1, rightParens, string + "(");
    if (leftParens < rightParens) builder(leftParens, rightParens - 1, string + ")");
  }

  builder(n, n, "");
  return answer;
};