function findMax(arr) {
  let maxTemp = Math.abs(arr[0] - arr[1]);

  for (let i = 1; i < arr.length - 1; i++) {
    maxTemp =
      maxTemp > Math.abs(arr[i] - arr[i + 1])
        ? maxTemp
        : Math.abs(arr[i] - arr[i + 1]);
  }
}
