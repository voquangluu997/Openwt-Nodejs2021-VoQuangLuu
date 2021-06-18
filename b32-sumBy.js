let sumBy = (arr, fn) => {
  return arr
    .map(typeof fn === "function" ? fn : (o) => o[fn])
    .reduce((acc, curr) => {
      return curr + acc;
    });
};

console.log(sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], (o) => o.n));
console.log(sumBy([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], "n"));

