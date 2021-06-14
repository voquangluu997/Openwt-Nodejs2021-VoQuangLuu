function swapHalfOfArr(arr) {
  let half = arr.length / 2;
  let newArr = [];
  return (arr.join("").slice(half) + arr.join("").slice(0, half)).split("");
}

