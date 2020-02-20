// Pope Innocent III sits in his bed in awe. How much is a million? he thinks to himself.
// He never was very good at math.

// He tries writing the number down, but because everyone in Europe is still using Roman
// at this moment in history, he cannot represent this number. If he only knew about the
// invention of zero, it might make this sort of thing easier.

// He decides to go back to bed. He consoles himself, The Lord would never challenge me thus;
// this must have been some deceit by the devil. A pretty horrendous nightmare, to be sure.

// Pope Innocent III's armies would go on to conquer Constantinople (now Istanbul), but they
// would never reclaim the holy land as he desired.

// In this kata you will have to calculate fib(n) where:

// fib(0) := 0
// fib(1) := 1
// fin(n + 2) := fib(n + 1) + fib(n)
// Write an algorithm that can handle n up to 2000000.

// Your algorithm must output the exact integer answer, to full precision. Also, it must
// correctly handle negative numbers as input.

// HINT I: Can you rearrange the equation fib(n + 2) = fib(n + 1) + fib(n) to find fib(n)
// if you already know fib(n + 1) and fib(n + 2)? Use this to reason what value fib has to have for negative values.

// HINT II: See https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-11.html#%_sec_1.2.4

const cache = {};
// negatives?
cache[-1] = 1;
cache[0] = 0;
cache[1] = 1;

function fib(n) {
  if (n > 1) {
    // do the positive fibonacci
    if (cache[n - 1] && cache[n - 2]) {
      cache[n] = cache[n - 1] + cache[n - 2];
    }
    let twoBehind = 0;
    let oneBehind = 1;
    let sum = 0;
    for (let i = 2; i <= n; i++) {
      sum = twoBehind + oneBehind;
      cache[i] = sum;
      twoBehind = oneBehind;
      oneBehind = sum;
    }
  } else if (n < -1) {
    if (cache[n + 2] && cache[n + 1]) {
      cache[n] = cache[n + 2] - cache[n + 1];
    }
    // f(n) = f(n + 2) - f(n + 1)
    let twoAhead = 0; // f(0) = 0
    let oneHead = 1; // f(-1) = 1;
    let diff = 0;
    for (let i = -2; i >= n; i--) {
      diff = twoAhead - oneHead;
      cache[i] = diff;
      twoAhead = oneHead;
      oneHead = diff;
    }
  }
  return cache[n];
}

console.log(fib(1476));
