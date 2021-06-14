function swapFirstAndLastCharactor(string) {
  return (
    string[string.length - 1] +
    string.substring(1, string.length - 1) +
    string[0]
  );
}

let string = "string";
while (string.length > 0) {
  console.log(swapFirstAndLastCharactor(string));
}
