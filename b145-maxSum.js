function maxSum(num) {
  let s = 0;
  for (let i = 0; s <= num; i++) {
    s += i++;
  }
  return i - 2;
}
