function replaceNum(string) {
  string = string.split("");
  for (let i = 0; i < string.length; i++) {
    if (+string[i] >= 0 && +string[i] <= 9) {
      string[i] = "$";
      break;
    }
  }
  return string.join("");
}
