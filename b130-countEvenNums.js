function countEvenNum(num) {
  let count = 0;
  while (num > 0) {
    count = (num % 10) % 2 == 0 ? count++ : count;
    num = Math.floor(num / 10);
  }
  return count;
}
