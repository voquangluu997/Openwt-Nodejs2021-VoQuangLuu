function check1Appear(arr) {
  return arr.length < 1 ? false : arr[0] == 1 || arr[arr.length - 1] == 1;
}
