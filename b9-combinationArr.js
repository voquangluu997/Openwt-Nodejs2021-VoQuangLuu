let combinationArr = (arr) => {
  return arr.reduce(
    (ar, curr) => {
      return ar.concat(
        ar.map((item) => {
          return [curr].concat(item);
        })
      );
    },
    [[]]
  );
};
