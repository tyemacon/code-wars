
var fibonacci = (function() {
  var cache = {};
  cache[1] = 1;
  cache[2] = 1;
  return function(n){
    if(cache[n]){
      return cache[n]
    }
    let oneBehind = 1;
    let twoBehind = 1;
    let fib = 0;
    for(var i = 3; i <= n; i++){
      fib = oneBehind + twoBehind;
      twoBehind = oneBehind;
      oneBehind = fib;
      console.log([i, fib])
    }
    cache[n] = fib;
    return fib;
  }
})()
console.log(fibonacci(8))
console.log(fibonacci(8))
console.log(fibonacci(9))