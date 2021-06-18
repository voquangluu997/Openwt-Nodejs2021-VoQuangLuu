let numToTime = (num) => {
  return num == 0 || num == 24
    ? "12 am"
    : num == 12
    ? "12pm"
    : num < 12
    ? num + " am"
    : (num % 12) + " pm";
};
