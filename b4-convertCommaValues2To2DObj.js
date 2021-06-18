let convertCommaValues2To2DObj = (string) => {
  let _2DArr = [];
  let keys = string.split("\n")[0].split(",");
  let value1 = string.split("\n")[1].split(",");
  let value2 = string.split("\n")[2].split(",");
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < keys.length; i++) {
    obj1[keys[i]] = value1[i];
    obj2[keys[i]] = value2[i];
  }
  _2DArr.push(obj1, obj2);
  return _2DArr;
};

convertCommaValues2To2DObj("key1,key2\na,b\nc,d");
