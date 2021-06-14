function replaceCharactor(string) {
  let newString = "";
  for (let pos = 0; pos < string.length; pos++) {
    newString +=
      string.charAt(pos) != "z"
        ? String.fromCharCode(string.charAt(pos).charCodeAt(0) + 1)
        : "a";
  }
  return newString;
}
