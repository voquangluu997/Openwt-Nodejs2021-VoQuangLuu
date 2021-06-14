function _16BitsReverse(num) {
  var result = 0;
  for (var i = 0; i < 16; i++) {
    result = result * 2 + (num % 2);
    num = Math.floor(num / 2);
  }
  return result;
}
