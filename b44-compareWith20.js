function compareWith20(num1, num2, num3) {
  return (
    (num1 >= 20 && (num1 < num2 || num1 < num3)) ||
    (num2 >= 20 && (num2 < num1 || num2 < num3)) ||
    (num3 >= 20 && (num3 < num2 || num3 < num1))
  );
}
