let renameKey = (keysMap, obj) => {
  let objKeys = Object.keys(obj);
  let newObjKeys = Object.keys(keysMap);

  Object.keys(keysMap).forEach((key) => {
    obj[keysMap[key]] = obj[key];
    delete obj[key];
    // if(obj.hasOwnProperty(key))
  });
  return obj;
};
