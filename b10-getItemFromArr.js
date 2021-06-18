let getItemeFromArr = (arr, indexArr) => {
  let result = [];
  indexArr.forEach((item) => {
    result.push(arr[item]);
  });
  return result;
};
