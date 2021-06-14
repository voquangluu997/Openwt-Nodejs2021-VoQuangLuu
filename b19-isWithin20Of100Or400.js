function isWithin20Of100Or400(number) {
  return Math.abs(number - 100) <= 20 || Math.abs(number - 400) <= 20;
}
