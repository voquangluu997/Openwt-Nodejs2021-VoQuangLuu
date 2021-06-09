function calAreaOfTriangle(a, b, c) {
  let p = a + b + c;
  return Math.sqrt(p * (p - a) + p * (p - b) + p * (p - c));
}

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

if (isTriangle(5, 6, 7)) {
  calAreaOfTriangle(5, 6, 7);
}
