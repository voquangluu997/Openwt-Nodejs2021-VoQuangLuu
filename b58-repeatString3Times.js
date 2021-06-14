function repeatString(string) {
  let repeatString = string.subString(string.length - 4);
  let newString = "";
  for (let repeatTime = 0; repeatTime < 4; repeatTime++) {
    newString += repeatString;
  }
  return newString;
}
