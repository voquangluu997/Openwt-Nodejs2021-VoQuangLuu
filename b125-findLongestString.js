function findLongestString(arr) {
  let longestString = arr[0];
  for (let i = 1; i < arr.length; i++) {
    longestString = longestString < arr[i].length ? arr[i] : arr[0];
  }
  return longestString;
}
