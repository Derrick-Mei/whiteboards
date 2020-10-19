/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {

  // I added empty space to move index of letter to equal matrix index
  s = ' ' + s;
  p = ' ' + p;

  const sLength = s.length;
  const pLength = p.length;
  // console.log(s.length)
  // console.log(p.length)
  // console.log({s, p})

  // matrix of s Height and p length all false except [0][0] which is true as no pattern with no string matches
  const matrix = Array(sLength).fill().map(() => Array(pLength).fill(false))
  matrix[0][0] = true;

  for (let z=1; z<pLength; z++) {
      if (p[z] === '*' && matrix[0][z-2] == true) matrix[0][z] = true;
  }

  for (let i=1; i<sLength; i++) {

      for (let j=1; j<pLength; j++) {

          if (p[j] === '*') {
              // 0 match
              if (matrix[i][j-2] === true) matrix[i][j] = true;

              // n match
              if (s[i] === p[j-1] || p[j-1] === '.') {
                  if ( matrix[i-1][j] === true ) matrix[i][j] = true;
              }
          } else {
              if (p[j] === s[i] || p[j] === '.') {
                  if (matrix[i-1][j-1] === true) matrix[i][j] = true;
              }
          }

      }
  }
  // console.log(matrix)
  return matrix[sLength-1][pLength-1];
};