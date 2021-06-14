function sortArrByStringLength(arr) {
  for (let i = 0; i < arr.length - 1; i++)
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i].length > arr[j].length) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  return arr;
}
