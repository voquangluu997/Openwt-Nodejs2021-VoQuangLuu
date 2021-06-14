function toUpAndLowerCase(string) {
  let first3Charactor = string.substring(0, 3).toLowerCase();

  return string.length > 3
    ? first3Charactor + string.substring(3)
    : string.toUpperCase();
}
