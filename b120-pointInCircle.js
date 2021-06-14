function pointInCircle(a, b, x, y, r) {
  let dist_points = (a - x) * (a - x) + (b - y) * (b - y);
  if (dist_points < r * r) {
    return true;
  }
  return false;
}
