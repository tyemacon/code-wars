function sumDigits(num) {
  // your code here
  console.log(num.toString());
  console.log(
    typeof num
      .toString()
      .split("")
      .reduceRight((x, y) => Number(x + y))
  );

  // return num
  //   .toString()
  //   .split("")
  //   .reduceRight((x, y, i) => {
  //     console.log(typeof x);
  //     console.log(x, y, i);
  //     num.toString()[i] === "-"
  //       ? Number(x) - 2 * Number(num.toString()[i + 1])
  //       : Number(x) + Number(y);
  //   });
  return num === 0
    ? 0
    : num > 0
    ? num
        .toString()
        .split("")
        .reduce((x, y) => Number(x) + Number(y))
    : num
        .toString()
        .split("")
        .reduceRight((x, y) =>
          y !== "-" ? Number(x) + Number(y) : Number(x)
        ) -
      2 * num.toString()[1];
}

console.log(sumDigits(-73412));
// console.log(typeof sumDigits(22))

console.log(
  new Array(10).reduce((x, y, i) => {
    console.log(x, y, i);

    x + i + 1;
  }, 0)
);
