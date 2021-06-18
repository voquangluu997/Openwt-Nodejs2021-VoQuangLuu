let nonUniqueObject = (arr, fn) => {
  let rs = [];
  for (let i = 0; i < arr.length; i++) {
    let isNonUnique = true;
    for (let j = 0; j < arr.length; j++) {
      if (i == j) continue;
      if (fn(arr[i], arr[j]) == true) {
        isNonUnique = false;
        continue;
      }
    }
    if (isNonUnique) rs.push(arr[i]);
  }
  return rs;
};

console.log(
  nonUniqueObject(
    [
      { id: 0, value: "a" },
      { id: 1, value: "b" },
      { id: 2, value: "c" },
      { id: 1, value: "d" },
      { id: 0, value: "e" },
    ],
    (a, b) => a.id == b.id
  )
);
