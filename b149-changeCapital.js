function changeCapCharactor(char) {
  if (char >= "A" && char <= "Z")
    return String.fromCharCode(char.charCodeAt(0) + 32);
  else if (char >= "a" && char <= "z")
    return String.fromCharCode(char.charCodeAt(0) - 32);
  else return char;
}

function changeCapital(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    result += changeCapCharactor(string.charAt(i));
  }
  return result;
}
