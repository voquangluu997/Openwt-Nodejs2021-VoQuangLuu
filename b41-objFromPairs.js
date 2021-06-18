let objFromPairs = (arr) => {
  return arr.reduce((acc, val) => {
    acc[val[0]] = val[1];
    return acc;
  }, {});
};

console.log(
  objFromPairs([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
);
