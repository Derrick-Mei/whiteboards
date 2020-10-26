/*
  Naive recursive solution that recurses along
  each possible jump and branches out from there
*/
// function minJumps(arr, start=0, end=arr.length-1) {
//   // base case: when start and end are at the same spot
//   if (start === end) {
//     return 0;
//   }
//   // when nothing is reachable, return infinity
//   if (arr[start] === 0) {
//     return Infinity;
//   }
//   // traverse through all the spots reachable by
//   // arr[start], recursively getting the min number
//   // of jumps needed to reach arr[end]
//   let min = Infinity;
//   for (let i = start + 1; i <= end && i <= start + arr[start]; i++) {
//     const jumps = minJumps(arr, start, end);
//     if (jumps !== Infinity && jumps + 1 < min) {
//       min = jumps + 1;
//     }
//   }

//   return min;
// }

/*
  Solution that utilizes dynamic programming in order to
  build up a `jumps` array from left to right such that
  `jumps[i]` indicates the minimum number of jumps needed
  to reach that spot from `arr[0]`. At the end, return
  `jumps[n-1]`.
*/
function minJumps(arr, n=arr.length) {
  const jumps = new Array(n).fill(Infinity); // make jumps array to count jumps needed to reach that index
    // should all start at infinity except first index should be 0 as that's the starting point

  if (n === 0 || arr[0] === 0) {
    return Infinity;
  }

  jumps[0] = 0;

  for (let i = 1; i < n; i++) { // loop through arr.length times

    for (let j = 0; j < i; j++) { // for each i, check j till i
      if (i <= j + arr[j] && jumps[j] !== Infinity) { // if you can jump to i from j given the number of jumps possible from j
        jumps[i] = Math.min(jumps[i], jumps[j] + 1); // check which is smaller, not jumping or jumping from j
        break; // going right, the number of jumps has to increase, therefore the first time you can reach i from j will be the lowest number possible
            // therefore you can break the loop
      }
    }
  }

  return jumps[n-1];
}

console.log(minJumps([1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]));  // should print 3
console.log(minJumps([1, 3, 6, 1, 0, 9]));  // should print 3
console.log(minJumps([2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1]));  // should print Infinity
console.log(minJumps([1, 3, 6, 3, 2, 3, 6, 8, 9, 5]));  // should print 4

/*
make jumps array,
first index of jump array is 0 as we start there and don't need to jump

loop over from first index till end
initialize first index as infinity jumps

nested loop from 0 to i

*/