function isSameDigitNum(num) {
  num = num.split("");
  for (let i = 0; i < num.length - 1; num++) {
    if (num[i] != num[i + 1]) return false;
  }
  return true;
}
