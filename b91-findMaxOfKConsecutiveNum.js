function findMaxPfKConsecutiveNum(arr, k) {
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += arr[i];
  }
  for (let i = 1; i < arr.length - k - 1; i++) {
    let sumOf3ConsecutiveNum = 0;
    for (let j = 0; j < k; j++) {
      sumOf3ConsecutiveNum += arr[j];
    }
    maxSum = sumOf3ConsecutiveNum > maxSum ? sumOf3ConsecutiveNum : maxSum;
  }

  return maxSum;
}
