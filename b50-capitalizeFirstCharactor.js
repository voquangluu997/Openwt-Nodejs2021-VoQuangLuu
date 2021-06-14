function enableCapitalize(string) {
  let words = string.trim().split(" ");
  let result = "";
  words.forEach((word) => {
    console.log(word[0].toUpperCase() + word.slice(1));
    word = word[0].toUpperCase() + word.slice(1);
    result += word + " ";
  });
  return result;
}
