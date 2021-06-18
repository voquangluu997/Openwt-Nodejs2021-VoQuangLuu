const truthyGroup = (arr, isTruthyArr) =>
  arr.reduce(
    (acc, curr, i) => (acc[isTruthyArr[i] ? 0 : 1].push(curr), acc),
    [[], []]
  );
