function checkScriptString(string) {
  return string.length >= 6
    ? string.indexOf("Script") == string.length - 6
    : false;
}
