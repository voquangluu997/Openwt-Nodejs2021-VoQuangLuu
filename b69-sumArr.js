function sumOfArr(arr) {
  return arr.reduce((sum, currValue) => {
    return sum + currValue;
  }, 0);
}
