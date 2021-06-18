let pad = (string, length, char = " ") => {
  let dif = Math.ceil((length - string.length) / 2);
  console.log(dif);
  char = char
    .split("")
    .map((item) => {
      while (dif > 1) {
        item = item + "" + char;
        dif--;
      }
      return item;
    })
    .join("");
  console.log(char);

  return string.length > length
    ? string
    : (char + string + char).slice(0, length);
};

console.log(pad("42", 6, "0"));
console.log(pad("cat", 8));
