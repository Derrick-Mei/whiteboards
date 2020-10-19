/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const answer = [];

  nums = nums.sort(function(a, b) {
  return a - b;
});
  const numsMap = {}
  nums.forEach((num, i) => numsMap[num] = i);
  // console.log(numsMap)

  for (let i=0; i< nums.length; i++) {

      if (nums[i] > 0) return answer;
      // if the previous number is === to current number
      // that means we've checked using double of that num as j === i+1, so continue
      if (i > 0 && nums[i] === nums[i-1]) continue;

      for (let j=i+1; j<nums.length; j++) {
          const thirdNum = (0 - nums[i] - nums[j]);
          const thirdIndex = numsMap[thirdNum]
          // console.log({i,j, thirdNum, thing: numsMap[thirdNum]})
          // console.log(thirdIndex > [j])


          if (numsMap.hasOwnProperty(thirdNum) && thirdIndex > [j]) {
              answer.push([nums[i], nums[j], thirdNum])
              while(nums[j] === nums[j+1]) j++
          }
      }
  }


  return answer;
};