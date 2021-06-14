function replaceNumber(arr, oldNum, replaceNum) {
  arr.forEach((item) => {
    item = item == oldNum ? replaceNum : item;
  });
  return arr;
}
