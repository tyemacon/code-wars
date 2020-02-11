// For a given list [x1, x2, x3, ..., xn] compute the last (decimal)
// digit of x1 ^ (x2 ^ (x3 ^ (... ^ xn))).

// E. g.,

// lastDigit([3, 4, 2]) === 1
// because 3 ^ (4 ^ 2) = 3 ^ 16 = 43046721.

// Beware: powers grow incredibly fast. For example, 9 ^ (9 ^ 9) has more than
// 369 millions of digits. lastDigit has to deal with such numbers efficiently.

// Corner cases: we assume that 0 ^ 0 = 1 and that lastDigit of an empty list equals to 1.

// This kata generalizes Last digit of a large number; you may find useful to solve it beforehand.
console.log(22 ** 22);
console.log(2 ** 61);
function lastDigit(as) {
  if (!as.length) {
    return 1;
  }
  const patternFor = {
    2: [2, 4, 8, 6],
    3: [3, 9, 7, 1],
    4: [4, 6],
    5: [5],
    6: [6],
    7: [7, 9, 3, 1],
    8: [8, 4, 2, 6],
    9: [9, 1]
  };
  let pwr = as[as.length - 1] % 20 ? as[as.length - 1] % 20 : 20;
  for (let i = as.length - 2; i >= 0; i--) {
    let result = (as[i] % 100) ** pwr;
    console.log(as[i], pwr, result);
    pwr = result % 20 ? result % 20 : 20;
  }
  return pwr % 10;
}
console.log(3 ** 16);
console.log(7 ** 21);
console.log(2 ** 53);
console.log(2 ** 31);
console.log(Number.MAX_SAFE_INTEGER);
console.log(lastDigit([8, 7, 3, 4, 2]));
