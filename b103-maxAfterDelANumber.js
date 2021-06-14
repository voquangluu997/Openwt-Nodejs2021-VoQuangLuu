function maxAfterDelANum(num) {
  let numToString = num.toString();
  let max = +numToString.slice(1);

  for (let i = 0; i < numToString.length; i++) {
    currNum = numToString.slice(0, i) + numToString.slice(i + 1);
    max = +currNum > max ? +currNum : max;
  }
  return max;
}
