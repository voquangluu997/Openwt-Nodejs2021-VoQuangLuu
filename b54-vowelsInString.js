function vowelsInString(string) {
  let count = 0;
  for (let pos = 0; pos < string.length; pos++) {
    count =
      string.charAt(pos) == "a" ||
      string.charAt(pos) == "0" ||
      string.charAt(pos) == "i" ||
      string.charAt(pos) == "e" ||
      string.charAt(pos) == "u"
        ? count++
        : count;
  }
  return count;
}
