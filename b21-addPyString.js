function addPyString(string) {
  return string.indexOf("Py") == 0 ? string : "Py" + string;
}
