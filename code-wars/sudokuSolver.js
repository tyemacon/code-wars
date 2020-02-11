// Write a function that will solve a 9x9 Sudoku puzzle. 
// The function will take one argument consisting of the 2D puzzle array,
// with the value 0 representing an unknown square.

// The Sudokus tested against your function will be "easy" (i.e. determinable; 
// there will be no need to assume and test possibilities on unknowns) and can 
// be solved with a brute-force approach.


function sudoku(puzzle) {
  //return the solved puzzle as a 2d array of 9 x 9 
  // BRUTE FORCE
  let solutionFound = null;
  let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const recurse = (row, col) => {
    if(row === 8 && col === 6){
      debugger;
    }
    if(!validRows(puzzle) || !validColumns(puzzle) || !validBoxes(puzzle)){
      return false;
    }
    if(row > 8){
      solutionFound = copyBoard(puzzle);
      return true;
    }
    let nextRow = (col === 8) ? row + 1 : row;
    let nextCol = (col === 8) ? 0 : col + 1;
    if(puzzle[row][col] === 0){
      digits.forEach((digit) => {
        puzzle[row][col] = digit;
        if(!recurse(nextRow, nextCol)){
          puzzle[row][col] = 0;
        }
      })
    }else{
      recurse(nextRow, nextCol)
    }
  }

  recurse(0, 0)
  return solutionFound;
}

function copyBoard(board){
  let copy = [];
  for(let row = 0; row < board.length; row++){
    let rowCopy = [];
    for(let col = 0; col < board.length; col++){
      rowCopy.push(board[row][col]);
    }
    copy.push(rowCopy)
  }
  return copy;
}

// Empty spaces count as valid solutions for all checks!
// (Rows, Columns, and Boxes)
function validRows(board){
  let repeat = false;
  board.forEach((row) => {
    let numsFound = {};
    for(let i = 0; i < row.length; i++){
      if(row[i] === 0){
        continue;
      }
      if(!numsFound[row[i]]){
        numsFound[row[i]] = true;
      }else{
        repeat = true;
      }
    }
  })
  return !repeat;
}

function validColumns(board){
  for(let col = 0; col < board.length; col++){
    let numsFound = {};
    for(let row = 0; row < board.length; row++){
      if(board[row][col] === 0){
        continue;
      }
      if(!numsFound[board[row][col]]){
        numsFound[board[row][col]] = true;
      }else{
        return false;
      }
    }
  }
  return true;
}

function validBoxes(board){
  let boxes = [];
  // Collect the nine boxes
  for(let j = 0; j < board.length; j++){
    let newBox = [];
    for(let i = 0; i < board.length; i++){
      let row = Math.floor(i/3) + 3*Math.floor(j/3);
      let col = (i % 3) + 3*(j % 3)
      newBox.push(board[row][col]);
    }
    boxes.push(newBox)
  }
  let repeat = false;
  boxes.forEach((box) => {
    let numsFound = {};
    for(let i = 0; i < box.length; i++){
      if(box[i] === 0){
        continue;
      }
      if(!numsFound[box[i]]){
        numsFound[box[i]] = true;
      }else{
        repeat = true;
      }
    }
  })
  return !repeat;
}
var puzzle = [
  [5,3,0,0,7,0,0,0,0],
  [6,0,0,1,9,5,0,0,0],
  [0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],
  [4,0,0,8,0,3,0,0,1],
  [7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],
  [0,0,0,4,1,9,0,0,5],
  [0,0,0,0,8,0,0,7,9]
];

let solvedPuzzle = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

// console.log(validBoxes(solvedPuzzle))
// console.log(validRows(solvedPuzzle))
// console.log(validColumns(solvedPuzzle))
console.log(sudoku(puzzle))