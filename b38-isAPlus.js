function isAPlusExam(mark, isFinalExam) {
  return isFinalExam ? mark >= 90 : mark >= 89 && mark <= 100;
}
