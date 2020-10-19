Constraints:

Can't use an object to store values because that would no longer be constant extra space (as the size of the object would be dependent on the number of values in the array).
For the same reason, we can't iniitalize another array.
Possible Scenarios:
1: Array has negative and/or positive values but does not contain the integer 1. In that case, result would be 1.
2: Array contains the integer 1 and has one or more missing integers within the array. In that case, we need to be able to tell where that gap is.
3: Array contains only positive integers and contains 1 through the length of the array. In that case, result would be array length + 1.

Observations:

If there are no gaps, the largest value for an integer in the array is the length of the array.
That means that we don't care about any values that are greater than the length of the array (because they wouldn't affect the calculation of what the smallest integer missing would be as their inclusion would ensure a gap elsewhere)
If the lowest value we care about is 1 and the largest value we care about is the length of the array, we can iterate through the array and swap the value at the current index to the index of the value - 1 in order to track whether or not a given value exists in the array. That is, given an array [3, 2, 1], swapping 3 with 1, not incrementing the iterator so that you are still looking at the array at index 0, seeing that 1 is in place, incrementing the index, seeing that 2 is in place, incrementing the index, and seeing that 3 is in place. We would then loop through the array a second time in order to find the lowest value that isn't at the index of its value - 1.
Big O Analysis:
This function goes through the array, swapping the value at the current index with the value at the index of one less than the value. If the value is less than 0 or greater than the length of the array, the value at that index gets set to 0 to make it easier on the eyes during debugging of edge cases.

While it's employing a for loop and a while loop in the first pass, it's not nested in the sense that two counters are going as it's utilizing the same counter for both, so I believe that portion is still O(n), and tacking on the for loop at the end to determine whether or not an integer is present in the array wouldn't be significant enough to affect the time complexity.

As we're utilizing the original array and just changing pointer values and not actually moving the array in any way, this should still be O(1) space complexity.