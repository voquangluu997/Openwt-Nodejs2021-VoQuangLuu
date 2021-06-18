let unionWith = (arr1, arr2, comp) => {
  return [
    ...arr1,
    ...arr2.filter((item) => arr1.findIndex((e) => comp(e, item)) == -1),
  ];
};

console.log(
  unionWith(
    [1, 1.2, 1.5, 3, 0],
    [1.9, 3, 0, 3.9],
    (arr1, arr2) => Math.round(arr1) === Math.round(arr2)
  )
);
