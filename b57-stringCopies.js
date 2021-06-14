function stringCopies(string, repeatTimes) {
  if (repeatTimes < 0) return false;
  if (repeatTimes == 0) return "";
  for (let i = 0; i < repeatTimes; i++) {
    string += string;
  }
  return string;
}
