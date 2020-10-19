var maxSlidingWindow = function(nums, k) {
  let answer = [];

  for (let i=0; i<nums.length-k+1; i++) {
      let tempArr = [];
      for(let j=i; j<i+k; j++) {
          tempArr.push(nums[j])
      }
      tempArr.sort((a,b) => b-a)
      answer.push(tempArr[0])
  }

  return answer;
};