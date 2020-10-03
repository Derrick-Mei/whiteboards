var firstMissingPositive = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    // get value of number we're about to replace
    let temp = nums[i];

    // if the current number fits within the length of the array && is not negative
    while (temp > 0 && temp <= nums.length && temp !== nums[temp-1]) {
      let secondTemp = nums[temp-1];
      nums[temp-1] = temp;
      temp = secondTemp;
      console.log({ nums, temp, secondTemp });
    }

  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i+1) {
      return i+1;
    }
  }
  return nums.length+1;
};

let arr = [2, 1];

console.log(firstMissingPositive(arr));

/*
High level
traverse array.  Place each number at it's index-1;
traverse array second time and find where number doesn't = index-1;

edge cases
  negative numbers - can be skipped
  numbers > length - skipped otherwise not constant space
  if only 1 length
*/