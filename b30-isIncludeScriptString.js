function isIncludeScript(string) {
  return string.indexOf("Script") == 4
    ? string.substring(0, 4) + string.substring(10)
    : string;
}
