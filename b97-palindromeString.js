function palindromeString(string) {
  let length = string.length;
  for (let i = 0; i < length; i++) {
    let j = string.length - 1 - i;
    if (j >= i) {
      firstChar = string[i];
      lastChar = string[j];
      if (firstChar != lastChar) {
        string = string.slice(0, j + 1) + string[i] + string.slice(j + 1);
      }
    }
  }
  return string;
}
