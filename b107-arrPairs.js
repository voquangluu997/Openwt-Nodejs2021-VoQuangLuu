function arrPairs(arr) {
  let result = "";
  arr.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++) {
      result = arr[j] % arr[i] == 0 ? result + `(${arr[i]},${arr[j]}) ` : result;
    }
  return result;
}