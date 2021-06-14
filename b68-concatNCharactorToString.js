function concatCharactorToString(string, n) {
  return string.length < n
    ? false
    : string.slice(0, n) + string.slice(n - 3, n);
}
