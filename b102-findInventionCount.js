function findInventionCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      count = arr[i] > arr[j] ? count++ : count;
    }
  }
  return count;
}
