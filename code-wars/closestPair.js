// Given a number of points on a plane, your task is to find two points with the smallest distance 
// them in linearithmic O(n log n) time.

const pointsTest = [
  [2,2], // A
  [2,2], // B
  [5,5], // C
  [6,3], // D
  [6,7], // E
  [7,4], // F
  [7,9]  // G
] 
// => closest pair is: [[6,3],[7,4]] or [[7,4],[6,3]]
// (both answers are valid)

function calculateDistance(x, y){
  return Math.sqrt((x[0] - y[0])**2 + (x[1] - y[1])**2);
}

function closestPair(points){
  // Create storage for distances between two points;
  let distances = {}; // <-- maybe just two points
  let pointOne, pointTwo;
  let shortestPath = Infinity;
  // Iterate over list of points. 
  for(let i = 0; i < points.length; i++){
    let currentStart = points[i];
    for(let j = i + 1; j < points.length; j++){
      let currentEnd = points[j];
      // Calculate distance from each point to every point AFTER it in the array
      let distanceBetween = calculateDistance(currentStart, currentEnd);
      console.log(currentStart, currentEnd, distanceBetween)
      // Update new closest distance if found (sort the two points saved if necessary)
      if(distanceBetween < shortestPath){
        shortestPath = distanceBetween;
        pointOne = currentStart;
        pointTwo = currentEnd;
      }
    }
  }
  console.log(shortestPath)
  return [pointOne, pointTwo]
}
// console.log(calculateDistance([0,0], [1,3]))
console.log(closestPair(pointsTest))