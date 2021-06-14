function compare2Arr(arr1, arr2) {
  let diffPos = { count: 0, pos1: null, pos2: null };

  for (let pos = 0; pos < arr1.length; pos++) {
    if (arr1[pos] != arr2[pos]) {
      diffPos.count++;
      diffPos.count == 1 ? (diffPos.pos1 = pos) : (diffPos.pos2 = pos);
    }
  }
  return diffPos.count != 0 && diffPos.count != 2
    ? false
    : arr2[diffPos.pos1] == arr1[diffPos.pos2] &&
        arr1[diffPos.pos1] == arr2[diffPos.pos2];
}

