function sumWithoutCarry(num1, num2) {
  let result = "";
  while (num1 != 0) {
    let temp = ((num1 % 10) + (num2 % 10)) % 10;
    num1 = Math.floor(num1 / 10);
    num2 = Math.floor(num2 / 10);
    result = temp.toString() + result;
  }
  return result;
}
