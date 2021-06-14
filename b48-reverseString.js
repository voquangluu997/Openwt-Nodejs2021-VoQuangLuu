function reverseString(string) {
  let reversedString = "";
  for (let charactor = string.length - 1; charactor >= 0; charactor--) {
    reversedString += string.charAt(charactor);
  }
  return reversedString;
}
