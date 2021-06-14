function isUpperCase(char) {
  return char <= "Z" && char >= "A";
}
function isLatin(char) {
  return (char <= "z" && char >= "a") || (char <= "Z" && char >= "A");
}

function isOnyLatinChar(string) {
  for (let i = 0; i < string.length; i++) {
    let currchar = string.charAt(i);
    if (isLatin(currchar)) {
      if (i == string.length - 1) continue;
      if (isUpperCase(currchar) == isUpperCase(string.charAt(i + 1)))
        return false;
    } else return false;
  }
  return true;
}
