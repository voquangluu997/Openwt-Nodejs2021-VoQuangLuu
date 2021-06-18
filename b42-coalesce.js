let coalesce = (...args) => {
  return [...args].filter((item) => {
    return ![undefined, null, NaN, ""].includes(item);
  });
};

console.log(coalesce(undefined, null, NaN, "", "Waldo"));
