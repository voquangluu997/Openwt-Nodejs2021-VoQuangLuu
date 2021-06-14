function hashDivision3(string) {
  let posHash = string.indexOf("#");
  let leftVal = string.slice(0, posHash);
  let rightVal = string.slice(posHash + 1);
  let result = [];

  for (let i = 0; i < 9; i++) {
    let tempNum = +(leftVal + i + rightVal);
    if (tempNum % 3 == 0) result.push(tempNum);
  }
  return result;
}
