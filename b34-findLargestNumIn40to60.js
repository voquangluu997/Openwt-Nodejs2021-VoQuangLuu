function findLargestNumber(num1, num2) {
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60)
    return num1 > num2 ? num1 : num2;
  else return "two num not in 40-60";
}
