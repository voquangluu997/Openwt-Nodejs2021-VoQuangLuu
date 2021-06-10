function checkIncreMode(num1, num2, num3) {
  return num1 < num2 && num2 < num3
    ? "Stric mode"
    : num3 > num2
    ? "Soft Mode"
    : "Nothing";
}
