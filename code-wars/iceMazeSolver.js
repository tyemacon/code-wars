// In many grid-based 2D puzzle games, there is a typical form of puzzle which are usually
// referred to as 'ice puzzle':

// You have to traverse from point A to point B
// You can move towards one of the 4 orthogonal directions, 1 tile at a time
// Some of the floors are slippery; if you walk onto a slippery tile, you'll keep sliding in the direction you're going until you land on a non-slippery tile, or you collide with an obstacle/wall

// You will be given an M x N well-formed rectanglar ASCII map of the form:

// var map = '\
//     x \n\
//   #   \n\
//    E  \n\
//  #    \n\
//     # \n\
// S    #';
// /*
// Player starts at the start, and ends by reaching the end.

// legend:
// S: start (slippery, only 1 exists)
// E: end (non-slippery, only 1 exists)
//  : slippery tile
// x: non-slippery tile
// #: obstacles
// (You can't go past map edges, which serves as the walls of the puzzle.)
// */
// Your solver should find the optimal solution (minimal number of moves, as in,
// the amount of times you make a step), and return an array of directions: 'u', 'd', 'l', 'r' for up/down/left/right respectively. So for the example map above, you should return ['u', 'r', 'd', 'l', 'u', 'r']. If there are multiple solutions with the same amount of steps, tiebreak by least distance traversed. If there are still ties, just return any one of them.

// Also, you might be passed some maps which does not admit any solutions. In this case, return null.

function iceMazeSolver(map) {
  // Turn input string into a matrix.
  // As matrix is formed, save the starting (and ending?) point to save a second iteration;
  const maze = [];
  let row = new Array();
  let x, y;
  for (let i = 0; i < map.length; i++) {
    if (map[i] === "S") {
      x = maze.length;
      // console.log(i, maze[0].length);
      y = !maze.length ? i : i % (maze[0].length + 1);
    }
    if (map[i] !== "\n") {
      row.push(map[i]);
    } else {
      maze.push(row);
      row = new Array();
    }
    if (i === map.length - 1) {
      maze.push(row);
    }
  }
  // console.log(x, y, maze[x][y]);
  const dirs = {
    u: [-1, 0],
    d: [1, 0],
    l: [0, -1],
    r: [0, 1]
  };
  const path = [];
  const recursion = (x, y) => {
    // console.log(x, y);
    for (let dir in dirs) {
      let xDelta = dirs[dir][0];
      let yDelta = dirs[dir][1];
      // console.log(x + xDelta, y + yDelta);
      // console.log(maze[4][0]);
      // console.log(maze[x + xDelta][y + yDelta]);
      let moved = false;
      while (maze[x + xDelta] && maze[x + xDelta][y + yDelta]) {
        moved = true;
        // console.log(x + xDelta, y + yDelta);
        // console.log(maze[x + xDelta][y + yDelta]);
        if (maze[x + xDelta][y + yDelta] === "x") {
        } else if (maze[x + xDelta][y + yDelta] === "#") {
        }
        x += xDelta;
        y += yDelta;
      }
      // Are we at an edge?
      if (moved) {
        paths.push(dir);
        recursion(x, y);
        paths.pop(dir);
      }
    }
  };
  // console.log(recursion(x, y))
  return maze;
}

function isValid(maze, x, y) {
  return maze[x][y] !== undefined;
}

var map = "\
    x \n\
  #   \n\
   E  \n\
 #    \n\
    # \n\
S    #";

console.log(iceMazeSolver(map));
