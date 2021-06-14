function compareRightmostNum(num1, num2, num3) {
  rightmost1 = num1 % 10;
  rightmost2 = num2 % 10;
  rightmost3 = num3 % 10;

  return (
    rightmost1 == rightmost2 ||
    rightmost1 == rightmost3 ||
    rightmost3 == rightmost2
  );
}
