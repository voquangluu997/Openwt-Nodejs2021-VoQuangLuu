function numToBinary(num) {
  let binaryNum = "";

  while (num > 0) {
    binaryNum += num % 2;
    num = Math.floor(num / 2);
  }
  let rs = "";
  for (let i = binaryNum.length - 1; i >= 0; i--) {
    rs += binaryNum.charAt(i);
  }
  return rs;
}
