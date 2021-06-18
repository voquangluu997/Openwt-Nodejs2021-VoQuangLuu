let removeKeys = (obj, arr) => {
  let removeKeys = Object.keys(obj).filter((item) => {
    return arr.includes(item);
  });

  removeKeys.forEach((item) => {
    delete obj[item];
  });
  return obj;
};

console.log(removeKeys({ a: 1, b: "2", c: 3 }, ["b", "c"]));
