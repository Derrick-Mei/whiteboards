var removeDuplicates = function (nums) {
  if (nums === null) {
    return 0;
  }
  // we have two pointers, the first pointer is where we want to insert
  // pointer1 = 1
  let pointer1 = 0;
  // the second pointer is where we are iterating in our array
  // pointer2 = 1

  let prev = null;

  for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {
    if (nums[pointer2] !== prev) {
      nums[pointer1] = nums[pointer2];
      pointer1++;
      prev = nums[pointer2];
    }
  }

  return pointer1;

  // loop over the array
    // compare the current item to the previous item
    // nums[i] ><= nums[i-1]
    // check if they're equal
      // ignore and move pointer2 to the next item
    // if they aren't equal
      // replace value at pointer1 with the current
      // incrememnt pointer1 and 2
};