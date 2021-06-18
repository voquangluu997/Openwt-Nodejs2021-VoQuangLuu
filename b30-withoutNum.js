let withoutNum = (arr, ...args) => {
  return arr.filter((item) => {
    return !item.includes(args);
  });
};
