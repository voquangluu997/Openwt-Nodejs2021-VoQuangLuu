let nestedJSON = (object, key)=> {
  return key in object
    ? object[key]
    : Object.values(object).reduce((acc, value) => {
        if (typeof value === "object") return nestedJSON(value, key);
      }, undefined);
}
