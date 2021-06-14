function findLongestString(arr) {
  let longestString = arr[0];
  for (let pos = 1; pos < arr.length; pos++) {
    longestString =
      longestString.length < arr[pos].length ? arr[pos] : longestString;
  }
  return longestString;
}
