let isHasOwnProp = (obj1, obj2)=> {
  return Object.keys(obj2).every((key) => {
    return obj1.hasOwnProperty(key) && obj1[key] == obj2[key];
  });
}

