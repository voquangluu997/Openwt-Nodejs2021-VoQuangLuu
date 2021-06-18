let convertCommaValues = (string)=> {
  let _2DArr = [];
  string.split("\n").forEach((element) => {
    _2DArr.push(element.split(","));
  });
  return _2DArr;
}
