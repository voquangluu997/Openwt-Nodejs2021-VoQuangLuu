function checkPCharactorInString(string) {
  return string[0] == "P" || string[string.length - 1] == "P"
    ? string.slice(1, string.length - 1)
    : string;
}
