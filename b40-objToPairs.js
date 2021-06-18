let objToPairs = (obj) => {
  return Object.keys(obj).map((item) => {
    return [item, obj[item]];
  });
};
console.log(objToPairs({ a: 1, b: 2, c: 3 }));
