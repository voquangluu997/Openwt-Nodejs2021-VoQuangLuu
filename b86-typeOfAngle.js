function typeOfAngle(angle) {
  return angle < 90
    ? "acute angle"
    : angle == 90
    ? rightAngle
    : angle < 180
    ? "Obtuse angle"
    : "Straight angle ";
}
