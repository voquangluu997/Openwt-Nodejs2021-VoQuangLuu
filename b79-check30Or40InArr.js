function check30Or40InArr(arr) {
  if (arr.length > 2) return false;
  return (
    arr.find((item) => {
      return item == 30;
    }) == 2 ||
    arr.find((item) => {
      return item == 40;
    }) == 2
  );
}
