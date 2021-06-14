function dotproduct(arr1, arr2) {
  let sum = 0;
  for (let i = 0; i < 3; i++) {
    sum += arr1[i] * arr2[i];
  }
  return sum;
}
