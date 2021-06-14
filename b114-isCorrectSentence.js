function isCorrectSentence(string) {
  return (
    string[0] >= "A" && string[0] <= "Z" && string[string.length - 1] == "."
  );
}
