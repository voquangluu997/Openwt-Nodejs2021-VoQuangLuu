function isNearest100(num1, num2) {
  return Math.abs(num1 - 100) < Math.abs(num2 - 100) ? num1 : num2;
}

