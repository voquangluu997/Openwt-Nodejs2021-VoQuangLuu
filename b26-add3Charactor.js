function add3Charactor(string) {
  let get3firstCharactor = string.slice(0, 3);
  return get3firstCharactor + string + get3firstCharactor;
}

let string = "string";

while (string.length >= 3) {
  add3Charactor(string);
}
