var lengthOfLongestSubstring = function(s) {
  let start = 0;
  let end = 0;
  let max = 0;
  let map = {};

  while(end < s.length) {
      if (map.hasOwnProperty(s[end])) {
          delete map[s[start]];
          start+=1;
      } else {
          map[s[end]] = true;
          end+=1;
          if (end-start > max) {
              max = end-start;
          }
      }
  }
  return max;
};