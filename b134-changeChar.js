function changeChar(string) {
  let result = [];
  for (let i = 0; i < string.length; i++) {
    let currChar = string.charCodeAt(i);
    let charOrder = currChar - 97;
    let newChar = 25 - charOrder + 97;
    result.push(String.fromCharCode(newChar));
  }
  return result.join("");
}
