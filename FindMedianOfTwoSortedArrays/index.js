var findMedianSortedArrays = function (nums1, nums2) {
  let p1 = 0;
  let p2 = 0;
  let nums1Used = false;
  let nums2Used = false;

  const totalLength = nums1.length + nums2.length;
  const isEven = totalLength % 2 === 0;
  const stopPoint = Math.floor(totalLength / 2) + 1;
  console.log(
    `length: ${totalLength}\nstopPoint: ${stopPoint}\nisEven: ${isEven} \n`
  );

  while (count(p1, p2, nums1Used, nums2Used) < stopPoint) {
    // both unused and both has length
    if (!nums1Used && !nums2Used && nums1.length && nums2.length) {
      if (nums1[0] < nums2[0]) {
        nums1Used = true;
      } else {
        nums2Used = true;
      }
      // both unused and only one exists
    } else if (!nums1Used && !nums2Used) {
      if (nums1.length) {
        nums1Used = true;
      } else {
        nums2Used = true;
      }
      // both not reached end
    } else if (
      (p1 < nums1.length &&
        p2 < nums2.length &&
        nums1[p1 + 1] &&
        nums2[p2 + 1]) ||
      (nums1.length && !nums1Used) ||
      (nums2.length && !nums2Used)
    ) {
      console.log("set1");
      if (nums1Used && nums2Used) {
        if (nums1[p1 + 1] < nums2[p2 + 1]) {
          p1++;
        } else {
          p2++;
        }
      } else if (nums1Used) {
        if (nums1[p1 + 1] < nums2[0]) {
          p1++;
        } else {
          nums2Used = true;
        }
      } else {
        //nums2Used only
        if (nums2[p2 + 1] < nums1[0]) {
          p2++;
        } else {
          nums1Used = true;
        }
      }
      // if nums2 reached end
    } else if (p1 < nums1.length - 1 && nums1Used) {
      console.log("set2");
      if (nums1Used) {
        p1++;
      } else {
        nums1Used = true;
      }
      // if nums1 reached end
    } else {
      console.log("set3");
      if (nums2Used) {
        p2++;
      } else {
        nums2Used = true;
      }
    }
    console.log(p1, p2, nums1Used, nums2Used);
  }
  console.log(p1, p2, nums1Used, nums2Used);

  // find actual median
  if (nums1Used && nums2Used) {
    if (isEven) {
      console.log("both and even");
      if (nums1[p1] > nums2[p2] && p1 > 0) {
        const secondBiggest = Math.max(nums1[p1 - 1], nums2[p2]);
        return (nums1[p1] + secondBiggest) / 2;
      } else if (nums1[p1] < nums2[p2] && p2 > 0) {
        const secondBiggest = Math.max(nums2[p2 - 1], nums1[p1]);
        return (nums2[p2] + secondBiggest) / 2;
      } else {
        return (nums1[p1] + nums2[p2]) / 2;
      }
    } else {
      console.log("both and odd");
      return Math.max(nums1[p1], nums2[p2]);
    }
  } else {
    if (nums1Used) {
      console.log("num1 arr");
      return getMedian(nums1, p1, isEven);
    } else {
      console.log("num2 arr");
      return getMedian(nums2, p2, isEven);
    }
  }
  // both arrays used and is odd
  // both arrays used and is even
  // 1 array used and is odd
  // 1 array used and is even
};

function getMedian(array, pointer, isEven) {
  if (isEven) {
    return (array[pointer] + array[pointer - 1]) / 2;
  } else {
    return array[pointer];
  }
}

// if one array is empty
// if only 1 array is needed
// if both arrays are needed

function count(val1, val2, nums1Used, nums2Used) {
  let total = val1 + val2;
  if (nums1Used) total++;
  if (nums2Used) total++;
  return total;
}
