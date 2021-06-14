function findKthLargestNumber(arr, k) {
  arr.sort((a, b) => b - a);
  return arr[k - 1];
}
