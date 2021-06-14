function checExpression(num1, num2, result) {
  return (
    num1 + num2 == result ||
    num1 - num2 == result ||
    num1 * num2 == result ||
    num1 / num2 == result
  );
}
