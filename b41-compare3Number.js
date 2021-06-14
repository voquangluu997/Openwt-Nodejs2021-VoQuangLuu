function compare3Number(num1, num2, num3) {
  return num1 != num2 && num2 != num3
    ? 20
    : num1 == num2 && num2 == num3
    ? 30
    : 40;
}
