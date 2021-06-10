function convertString(string) {
  let convertedString = "";

  for (let char = 0; char < string.length; char++) {
    let currChar = string.charAt(char);
    convertedString += String.fromCharCode(currChar.charCodeAt(0) + 1);
  }
  return convertedString;
}
