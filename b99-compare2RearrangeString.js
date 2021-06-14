function compare2RearrangeString(str1, str2) {
  let firstArrChar = str1.split("").sort;
  let secondArrChar = str2.split("").sort;

  for (let i = 0; i < Math.max(str1.length, str2.length); i++) {
    if (firstArrChar[i] != secondArrChar[i]) return false;
  }
  return true;
}
