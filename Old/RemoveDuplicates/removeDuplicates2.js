var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length;

  let count = 1;
  let current = nums[0];

  for (let num of nums) {
      // let current = num;

      if (current !== num) {
          nums[count] = num;
          count += 1;
      }

      current = num;
  }
  console.log(nums)
  return count

};