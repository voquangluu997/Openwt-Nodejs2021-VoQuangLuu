function sumOfDigitsInString(string) {
  let sum = 0;
  string = string.plit("");
  for (let i = 0; i <= string.length; i++) {
    if (+string[i] >= 0 && +string[i] <= 9) {
      sum += +string[i];
    }
  }
  return sum;
}
