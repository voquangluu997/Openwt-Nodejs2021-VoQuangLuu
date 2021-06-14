function largestEvenNum(arr) {
  let largestEvenNum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      largestEvenNum = largestEvenNum > arr[i] ? largestEvenNum : arr[i];
    }
  }
  return largestEvenNum;
}
