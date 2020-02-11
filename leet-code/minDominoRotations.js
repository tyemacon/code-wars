// In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the i-th domino.  
// (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

// We may rotate the i-th domino, so that A[i] and B[i] swap values.

// Return the minimum number of rotations so that all the values in A are the same, 
// or all the values in B are the same.

// If it cannot be done, return -1.

// Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
// Output: 2
// Explanation: 
// The first figure represents the dominoes as given by A and B: before we do any rotations.
// If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, 
// as indicated by the second figure.
// Example 2:

// Input: A = [3,5,1,2,3], B = [3,6,3,3,4]
// Output: -1
// Explanation: 
// In this case, it is not possible to rotate the dominoes to make one row of values equal.

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function (A, B) {
  let topMoves = -1;
  let botMoves = -1;
  let topCount = 1;
  let botCount = 0;
  let doubles = 0;
  let top = A[0];
  // figure out if possible for top of first tile #
  for (let i = 1; i < A.length; i++) {
    if (top === A[i] && top === B[i]) {
      doubles++;
    } else if (top === A[i]) {
      topCount++;
    } else if (top === B[i]) {
      botCount++;
    }
  }
  if ((topCount + botCount + doubles) === A.length) {
    topMoves = Math.min(topCount, botCount);
  }
  topCount = 0;
  botCount = 1;
  doubles = 0;
  let bot = B[0];
  // figure out if possible for bottom of first tile #
  for (let i = 1; i < B.length; i++) {
    if (bot === A[i] && bot === B[i]) {
      doubles++;
    } else if (bot === A[i]) {
      topCount++;
    } else if (bot === B[i]) {
      botCount++;
    }
  }
  console.log(topCount, botCount, doubles)
  if ((topCount + botCount + doubles) === B.length) {
    botMoves = Math.min(topCount, botCount);
  }
  // return minimum of two possibilities or -1 if neither possible
  return (topMoves === -1 || botMoves === -1) ? Math.max(topMoves, botMoves) : Math.min(topMoves, botMoves)
};

const X = [1, 2, 1, 1, 1, 2, 2, 2]
const Y = [2, 1, 2, 2, 2, 2, 2, 2]
console.log(minDominoRotations(X, Y))
// Input:
const A = [2, 1, 2, 4, 2, 2]
const B = [5, 2, 6, 2, 3, 2]
// console.log(minDominoRotations(A, B))

// Input: 
const C = [3, 5, 1, 2, 3]
const D = [3, 6, 3, 3, 4]
// console.log(minDominoRotations(C, D))