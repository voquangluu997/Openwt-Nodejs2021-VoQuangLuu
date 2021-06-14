function findMax(arr) {
  let maxTemp = Math.abs(arr[0] - arr[1]);

  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      maxTemp =
        maxTemp > Math.abs(arr[i] - arr[j])
          ? maxTemp
          : Math.abs(arr[i] - arr[j]);
    }
  }
}
