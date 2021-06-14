function findEvenValue(arr, num) {
  let posOfNum = arr.indexOf(num);
  let evenValues = 0;
  for (let i = 0; i < posOfNum; i++) {
    evenValues = arr[i] % 2 == 0 ? evenValues++ : evenValues;
  }
  return evenValues;
}
