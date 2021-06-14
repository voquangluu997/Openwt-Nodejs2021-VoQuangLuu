function finMostdAppearNum(arr) {
  let max = 0;
  let result = "";

  arr.forEach((element) => {
    let appearOfNum = arr.filter((e) => {
      return e == element;
    }).length;
    if (max < appearOfNum) {
      max = appearOfNum;
      result = element;
    }
  });
  return result;
}
