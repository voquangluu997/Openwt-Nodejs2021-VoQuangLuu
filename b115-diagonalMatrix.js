function diagonalMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix.length; j++) {
      if (i == j) {
        if (matrix[i][j] == 0) return false;
      } else {
        if (matrix[i][j] != 0) return false;
      }
    }
  return true;
}
