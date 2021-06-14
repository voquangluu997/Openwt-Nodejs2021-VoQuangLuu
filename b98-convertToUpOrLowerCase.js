function convertString(string) {
  let countUpperLetters = 0;
  let countLowerLetters = 0;

  for (let i = 0; i < string.length; i++) {
    string.charAt(i) >= "A" && string.charAt(i) <= "Z"
      ? countUpperLetters++
      : countLowerLetters++;
  }
  
  return countLowerLetters > countUpperLetters
    ? string.toLowerCase()
    : countLowerLetters < countUpperLetters
    ? string.toUpperCase()
    : string;
}
