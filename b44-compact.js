let compact = (arr) => {
  //   return arr.filter((item) => {
  //     return item != Boolean;
  //   });
  return arr.filter((item) => {
    return Boolean(item);
  });
};
console.log(compact([0, 1, false, 2, "", 3, "a", "e" * 23, NaN, "s", 34]));
