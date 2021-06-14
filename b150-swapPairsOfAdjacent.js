function swapPairsOfAdjacent(arr) {
  if (arr.length % 2 != 0) return false;
  for (let i = 0; i < arr.length - 1; i += 2) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  console.log(arr);
  return arr;
}
