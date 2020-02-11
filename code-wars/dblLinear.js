// Consider a sequence u where u is defined as follows:

// The number u(0) = 1 is the first one in u.
// For each x in u, then y = 2 * x + 1 and z = 3 * x + 1 must be in u too.
// There are no other numbers in u.
// Ex: u = [1, 3, 4, 7, 9, 10, 13, 15, 19, 21, 22, 27, ...]

// 1 gives 3 and 4, then 3 gives 7 and 10, 4 gives 9 and 13, 
// then 7 gives 15 and 22 and so on...

// Task:
// Given parameter n the function dbl_linear (or dblLinear...) 
// returns the element u(n) of the ordered (with <) sequence u 
// (so, there are no duplicates).

// Example:
// dbl_linear(10) should return 22
function print(array){
  array.forEach( (num , i) => {
    console.log(i + 1, num)
  })
}
function dblLinear(n){
  let array = [1];
  let stack = [];
  for(let i = 0; i < array.length; i++){
    if(i + 1 === n){
      print(array)
      return array[i]
    }
    let twoEx = (2 * array[i]) + 1;
    let j = array.length;
    while(array[j - 1] >= twoEx){
      stack.push(array[j-1]);
      j--;
    }
    if(!stack.length){
      array.push(twoEx)
    }else{
      array[j] = twoEx;
      j++
    }
    while(stack.length){
      let popped = stack.pop();
      if(j !== array.length){
        if(array[j] === popped || popped === twoEx){ continue }
        array[j] = popped;
      }else{
        array.push(popped);
      }
      j++;
    }
    array.push((3 * array[i]) + 1)
    if(array.length >= n){
      return array[n]
    }
  }
  return array[0]
}

console.log(dblLinear(10))