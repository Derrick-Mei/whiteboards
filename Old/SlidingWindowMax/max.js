/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
a queue would be the most efficient here, but I'm going to use a list
so I don't have to write a queue structure

So we have the maxArray which keeps track fo the largest number.
When a new number is added to the maxArray, all digits smaller than the new number will never be used as the new number is both newer and larger.  Thus they can be removed.

As we move the window down, we check the number about to be lost.  If it's the max, then remove it
*/


//  add, get max, delete


var maxSlidingWindow = function (nums, k) {

  let answer = [];

  let maxArray = [];

  let start = 0;
  let end = 0 - k + 1;

  while (start < nums.length) {

    // find index of when new number is the smallest number
    let smallerIndex = 0;
    while (smallerIndex < maxArray.length && maxArray[smallerIndex] < nums[start]) {
      smallerIndex += 1;
    }

    // if it's the smallest number just add to left
    if (smallerIndex === 0 || maxArray.length === 0) {
      maxArray.unshift(nums[start])
    } else {
      // else add new number at position and slice off other numbers
      maxArray[smallerIndex-1] = nums[start]
      maxArray = maxArray.slice(smallerIndex-1)
    }

    // if end >= -1 add to answer
    if (end >= 0) {
      answer.push(maxArray[maxArray.length - 1])
    }

    // if end === max, remove
    if (nums[end] === maxArray[maxArray.length - 1]) {
      maxArray.pop()
    }

    start += 1
    end += 1

  }

  return answer;
}

