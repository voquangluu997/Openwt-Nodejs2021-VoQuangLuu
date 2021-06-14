function sortString(string) {
  for (let pos = 0; pos < string.length - 1; pos++) {
    for (let pos2 = pos + 1; pos2 < string.length; pos2++) {
      let posOfChar = string.charAt(pos).charCodeAt(0);
      let posOfChar2 = string.charAt(pos2).charCodeAt(0);
      let charTemp = "";
      if (posOfChar > posOfChar2) {
        string =
          string.substring(0, pos) +
          string.charAt(pos2) +
          string.substring(pos + 1, pos2) +
          string.charAt(pos) +
          string.substring(pos2 + 1);
      }
    }
  }
  return string;
}
