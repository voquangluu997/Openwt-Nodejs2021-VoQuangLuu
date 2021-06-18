let numberToArrayDigits = (num)=> {
  return num
    .toString()
    .split("")
    .map((item) => {
      return +item;
    });
}
