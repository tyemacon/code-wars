const areEqualTuples = function(tuple1, tuple2){
  let equality = tuple1.length === tuple2.length;
  for(let i = 0; i < tuple1.length; i++){
    if(tuple1[i] !== tuple2[i]){
      equality = false;
      break;
    }
  }
  return equality;
}

const deleteFromEdges = function(tuple, edges){
  let reverseTuple = [tuple[1], tuple[0]];
  let count = 0;
  for(let i = 0; i < edges.length; i++){
    if(areEqualTuples(tuple, edges[i]) || areEqualTuples(reverseTuple, edges[i])){
      edges.splice(i,1);
      i = -1;
      count++;
    } 
    if(count === 2){ break; }
  }
}

const isInEdges = function(tuple, edges){
  for(let i = 0; i < edges.length; i++){
    if(areEqualTuples(tuple, edges[i])){
      return true;
    }
  }
  return false;
}
const dotsAndBoxes = function(moves){
  const validBoxes = {
    one: { name: 'one', sideCount: 0, edges: [[0,1],[1,0],[0,3],[3,0],[1,4],[4,1],[3,4],[4,3]] },
    two: { name: 'two', sideCount: 0, edges: [[1,2],[2,1],[1,4],[4,1],[2,5],[5,2],[4,5],[5,4]] },
    three: { name: 'three', sideCount: 0, edges: [[3,4],[4,3],[3,6],[6,3],[4,7],[7,4],[6,7],[7,6]] },
    four: { name: 'four', sideCount: 0, edges: [[4,5],[5,4],[4,7],[7,4],[5,8],[8,5],[7,8],[8,7]] }
  }
  let playerOneScore = 0;
  let playerTwoScore = 0;
  let player1 = false;
  let scored = false;
  let test = 11;
  for(let i = 0; i <= moves.length; i++){
    if(!scored){
      player1 = !player1;
    }
    scored = false;
    for(let key in validBoxes){
      let box = validBoxes[key];
      if(isInEdges(moves[i], box.edges)){
        deleteFromEdges(moves[i], box.edges);
        box.sideCount++;
        if(i === test){
          console.log(moves[i])
          console.log('player1=',player1)
        console.log(box.name)
        console.log(box.sideCount)
           console.log('one:', validBoxes.one.sideCount ,validBoxes.one.edges)
            console.log('two:',validBoxes.two.sideCount, validBoxes.two.edges)
    console.log('three:',validBoxes.three.sideCount, validBoxes.three.edges)
        console.log('four:',validBoxes.four.sideCount, validBoxes.four.edges)
        }
        if(box.sideCount === 4){
          scored = true;
          if(player1){
            playerOneScore++;
            console.log(playerOneScore);
          }else{
            playerTwoScore++;
            console.log(playerTwoScore);
          }
          console.log(scored)
        }
      }
    }

  }

  return [playerOneScore, playerTwoScore];
}


let moves = [[0,1],[7,8],[1,2],[6,7],[0,3],[8,5],[3,4],[4,1],[4,5],[2,5],[3,6],[7,4]];
console.log(dotsAndBoxes(moves));
//console.log(isInEdges([0,0], [[0,1],[0,0]]))



