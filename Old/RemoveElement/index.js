// solution 1 - doesn't work
var removeElement = function (nums, val) {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (startIndex <= endIndex) {
    // console.log({ startIndex, endIndex, nums });
    while (nums[startIndex] === val) {
      if (startIndex <= endIndex) {
        switchNumbers(startIndex, endIndex, nums);
        // console.log("switching: " + nums);
        endIndex--;
      }
    }
    startIndex++;
  }
  if ((endIndex === 0 && nums[endIndex] === val) || endIndex < 0) {
    // console.log({ nums });
    // console.log("something zero");
    nums = [];
    return 0;
  }
  nums.splice(endIndex + 1, nums.length - endIndex);
  // console.log({ nums, endIndex });
  return nums.length;
};
function switchNumbers(rightIndex, leftIndex, array) {
  const placeholder = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = placeholder;
}

// Solution 2 - actually works

var removeElement = function (nums, val) {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (nums[endIndex] === val) endIndex--;

  while (startIndex <= endIndex) {
    while (nums[endIndex] === val && startIndex < endIndex) endIndex--;
    if (nums[startIndex] === val) {
      switchNumbers(startIndex, endIndex, nums);
      endIndex--
    }
    startIndex++;
  }

    nums.splice(endIndex+1)
    return nums.length

};


function switchNumbers(rightIndex, leftIndex, array) {
  const placeholder = array[leftIndex];
  array[leftIndex] = array[rightIndex];
  array[rightIndex] = placeholder;
}