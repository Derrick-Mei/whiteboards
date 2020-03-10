function twoStrings(s1, s2) {
  // n = |s1| m = |s2|
  // O(n + m)
  // take one string, put all these letters in a hash table,
  let set = new Set();
  for (let letter of s1){
    set.add(letter)
  }

  for (let letter of s2){
    if (set.has(letter)){
      return "YES";
    }
  }

  return "NO";
  // see if the second string has any characters in the hashtable
    // if we find one in the second string, return "YES"
}





// find the number of unique common substrings in the two strings
// miss  m, i, s, s, i, o, n
// {
//   "m": [0],
//   "i": [1],
//   "s": [2,3]
// }

["m", "i", "s", "mi", "is", "ss", "mis", "iss", "miss"]

// kiss

// i, s, n, is, si, iss, ssi, issi
// 8 unique common substrings



// Complete the commonSubstrings function below, returns the count of occurrences
function commonSubstrings(s1, s2) {
  // loop over the first string, and add each letter to a map, pointing to the index
  // loop over the second string, if we find a match, then we look back at the first string
    // and advance in it, and compare that with the second string + 1

  let map = {};
  for (let i = 0; i < s1.length; i++) {
    map[s1[i]] = i;
  }

  console.log(map)

  let inCommon = 0;
  for (let i = 0; i < s2.length; i++) {
    if (map[s2[i]]) {
      s1Index = map[s2[i]];
      s2Index = i;
      while (s1Index < s1.length && s2Index < s2.length) {
        if (s1[s1Index] == s2[s2Index]) {
          inCommon++;
          s1Index++;
          s2Index++;
        } else {
          break;
        }
      }
    }
  }
  return inCommon;






    // find all substrings of s1, put them in a set
    // find all substrings of s2, put them in a set
    // loop through s2 set, and check if the value exists in s1 set
}


let inCommon = commonSubstrings("mis", "kis")
console.log(inCommon);
