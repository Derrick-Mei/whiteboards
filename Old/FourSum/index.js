/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  // the difficulty of this problem is that the solution set can't contain duplicates
  // at the end of each of the loops, check to see if the following number is a repeat.  If so, increase i
  // I would use a nested loop to deal with 2 of the numbers
  // Use a 2 pointer system for the remaining 2 numbers
  // when a solution is found, check the 2 pointers to see if their following numbers are a repeat

  nums.sort((a, b) => a - b);
  const answer = [];

  // outer loop for first number
  for (let i = 0; i < nums.length - 3; i++) {
    // if target number is negative and we're in positive numbers, then stop
    if (target < 0 && nums[i] > 0) return answer;
    // if target is positive and the smallest i is larger than target, stop
    if (target > 0 && nums[i] > target) return answer;

    // inner loop for second number
    for (let j = i + 1; j < nums.length - 2; j++) {

      // pointers for 3rd and 4th number
      let k = j + 1;
      let l = nums.length - 1;

      while (k < l) {
        const currentSum = nums[i] + nums[j] + nums[k] + nums[l];
        if (currentSum === target) {
          answer.push([nums[i], nums[j], nums[k], nums[l]]);
          // if the sum === target, increment/decrement pointers so that the next one is a different number
          while (nums[k + 1] === nums[k]) k++;
          while (nums[l - 1] === nums[l]) l--;
          k++;
          l--;
        } else if (currentSum < target) {
          k++;
        } else if (currentSum > target) {
          l--;
        }
      }
      // inner loop needs to increment until next number is different
      while (nums[j + 1] === nums[j]) j++;
    }
    // outer loop needs to increment until next number is different
    while (nums[i + 1] === nums[i]) i++;
  }
  return answer;
};
