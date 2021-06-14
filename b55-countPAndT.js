function countPAndT(string) {
  let count = { p: 0, t: 0 };
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) == "p") count.p++;
    if (string.charAt(i) == "t") count.t++;
  }
  return count.p == count.t;
}
