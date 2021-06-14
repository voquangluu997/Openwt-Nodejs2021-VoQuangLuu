function check1And3(arr) {
    return arr.find((item) => {
      return item == 1 || item == 3;
    }) > 0
      ? false
      : true;
  }
  