let string = "w3resource";
function rotateString() {
  let subString = string.substring(0, string.length - 1);
  string = string[string.length - 1] + subString;
  return string;
}
// let rs = rotateString(string);
let count = 1;
let printReSult = setInterval(() => {
  console.log(rotateString(string));
  if (count == string.length) clearInterval(printResult);
  count++;
}, 100);
