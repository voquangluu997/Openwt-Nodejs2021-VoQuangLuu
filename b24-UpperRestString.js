let upperRestString = ([first, ...rest], upperRest) => {
  return first.toLowerCase() + (upperRest
    ? rest.join("").toUpperCase()
    : rest.join());
};