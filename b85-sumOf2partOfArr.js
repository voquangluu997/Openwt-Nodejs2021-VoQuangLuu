function sumOf2PartOfArr(arr) {
  let firstValue = 0;
  let secondValue = 0;

  for (let pos = 0; pos < arr.length; pos++) {
    pos % 2 == 0 ? (firstValue += arr[pos]) : (secondValue += arr[pos]);
  }
  return [firstValue, secondValue];
}
