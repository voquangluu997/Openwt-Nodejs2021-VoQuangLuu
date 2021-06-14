function isPresent(start, end, num) {
  return num < 40 && num > 10000
    ? false
    : num >= start && num <= end
    ? true
    : false;
}
