/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  // the difficulty of this problem is that the solution set can't contain duplicates
  // at the end of each of the loops, check to see if the following number is a repeat
  // I would use a nested loop to deal with 2 of the numbers
  // Use a 2 pointer system for the remaining 2 numbers
  // when a solution is found, check the 2 pointers to see if their following numbers are a repeat

  nums.sort((a, b) => a - b);
  const answer = [];

  for (let i = 0; i < nums.length - 3; i++) {
    if (target < 0 && nums[i] > 0) return answer;
    if (target > 0 && nums[i] > target) return answer;

    for (let j = i + 1; j < nums.length - 2; j++) {
      let k = j + 1;
      let l = nums.length - 1;

      while (k < l) {
        const currentSum = nums[i] + nums[j] + nums[k] + nums[l];
        if (currentSum === target) {
          answer.push([nums[i], nums[j], nums[k], nums[l]]);
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
      while (nums[j + 1] === nums[j]) j++;
    }
    while (nums[i + 1] === nums[i]) i++;
  }
  return answer;
};
