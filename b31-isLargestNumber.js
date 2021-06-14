function findLargestNumber(num1, num2, num3) {
  let max = num1;
  if (num1 > num2) {
    if (num1 < num3) max = num3;
  } else {
    if (num2 > num3) {
      max = num2;
    } else max = num3;
  }
  return max;
}
