function rightMostRoundNum(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] % 10 == 0) return i;
  }
  return 0;
}
