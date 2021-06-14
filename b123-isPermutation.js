function isPermutation(arr, n) {
  arr.sort((a, b) => {
    return a - b;
  });
  for (let i = 0; i < n; i++) {
    if (a[i] != i + 1) return false;
  }
  return true;
}
