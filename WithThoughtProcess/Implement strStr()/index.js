/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (!haystack && !needle || !needle) return 0;
  const split = haystack.split(needle);
  if (split.length > 1) {
      return split[0].length
  } else {
      return -1
  }
};