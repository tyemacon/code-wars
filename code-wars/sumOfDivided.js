// Given an array of positive or negative integers
// I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has
// to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:

// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, 
// the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

function sumOfDivided(lst){
  let primeFactors = {};
  let results = [];
  lst.forEach((num) => {
    let currentNum = Math.abs(num);
    let primeFound = false;
    for(let i = 2; i <= (Math.abs(num) / 2); i++){
      if(isPrime(i) && currentNum % i === 0){
        primeFactors[i] = true;
        primeFound = true;
        while(currentNum % i === 0 && currentNum !== i){
          currentNum /= i;
        }
      }
    }
    if(!primeFound){
      primeFactors[Math.abs(num)] = true;
    }
  })
  Object.keys(primeFactors).forEach((factor) => {
    let sum = 0;
    lst.forEach((num) => {
      if(num % factor === 0){
        sum += num;
      }
    })
    results.push([Number(factor), sum])
  })
  console.log(primeFactors)
  return results;
}

function isPrime(n){
  if(n === 1){
    return false;
  }else if(n === 2){
    return true;
  }else{
    for(let i = 3; i < Math.sqrt(n); i++){
      if((n % i) === 0){
        return false
      }
    }
  }
  return true;
}

console.log(sumOfDivided([ 107, 158, 204, 100, 118, 123, 126, 110, 116, 100]))