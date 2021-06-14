function checkAAndBPosition(string) {
  for (let i = 0; i < string.length - 3; i++) {
    if (string[i] == "a") {
      if (string[i + 3] == "b") return true;
    }
  }
  return false;
}
