function findLargerNum(arr) {
  let largerNum = arr[0] > arr[arr.length - 1] ? arr[0] : arr[arr.length - 1];
  for (let pos = 0; (pos = arr.length - 1); pos++) {
    arr[pos] = max;
  }
}
