/*
Without using the multiplication, division, and mod operator, it's a little more difficult.

Another consideration to have is whether the answer is negative or positive which varies depending on the inputs

A brute force method would be to repeatedly subtract the dividend with the divisor and count how many times it takes.
You would need to account the varying combinations of the signs of the dividend and divisor

A more simple way to solve the second part is just to find the result's sign, find the numerical answer, then apply the sign at the end
If the signs of both dividend and divisor are the same, the answer will always be positive as a neg/neg is positive.
If the signs are not the same, then it is negative
You could then get the absolute value of the negative numbers by subtracting itself twice (if neg). Then simply subtract repeatedly

A second way to deal with the signs is that if the signs are different, add.  If the signs are the same then subtract.
This way would also lead towards 0, but you would still need additional logic to deal with the stopping condition (dividend < divisor etc)

For a more efficient solution, we need to find a way to increase the speed at which we count the divisor.

There are 2 methods that I can think of.  Bitwise operators and repeatedly adding the divisor to itself (aka squaring)

1.  Bitwise operators turn an integer into bits representation and then shifts it to the left/right.
      Each bit shift is equivalent to doubling or dividing by 2.

2. Conversely, if you add a number by itself, it's the same as squaring it.
      If you repeatedly added the sum together, it would be the same as repeatedly squaring the number/raising it to it's geometric sequence

You could either use bitwise operators or repeatedly summing both the divisor and count of the divisor until it is larger than the dividend

Then you could subtract the bitwised/summed divisor from the dividend and add the bitwised/summed count to the answer and repeat

Edge Cases
1. divisor is 0 - stipulated that this is not going to happen
2. dividend is 0, answer = 0 - should be handled by code
3. answer exceeds 32 bits signed then return 2147483647
*/

/*
Steps for bitwise:
1. find sign for answer
2. Using while loop, find largest bitwised divisor without going over dividend.  Subtract dividend and add count.  Repeat
3. apply sign to answer and return
*/

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  let answer = 0;

  const isPositive = dividend > 0 === divisor > 0 ? true : false;

  dividend = dividend > 0 ? dividend : dividend - dividend - dividend;
  divisor = divisor > 0 ? divisor : divisor - divisor - divisor;

  while (dividend >= divisor) {
    let numberOfDivisors = 1;

    let divisorSum = divisor;

    while (divisorSum <= dividend >> 1) {
      divisorSum <<= 1;
      numberOfDivisors <<= 1;
    }

    answer += numberOfDivisors;
    dividend -= divisorSum;
  }

  console.log({ answer });

  if (
    (answer > 2147483648 && !isPositive) ||
    (answer > 2147483647 && isPositive)
  )
    return 2147483647;

  return isPositive ? answer : -answer;
};

console.log(divide(-2147483648, 1));
