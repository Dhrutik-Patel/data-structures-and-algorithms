const setMatrixZeros = (matrix) => {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const rowZeros = Array(rows).fill(false);
  const colZeros = Array(cols).fill(false);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (matrix[i][j] === 0) {
        rowZeros[i] = true;
        colZeros[j] = true;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (rowZeros[i] || colZeros[j]) {
        matrix[i][j] = 0;
      }
    }
  }

  return matrix;
};

const matrix = [
  [1, 0, 1],
  [1, 1, 1],
  [0, 1, 1],
];

console.log(setMatrixZeros(matrix)); // [[0, 0, 0], [0, 0, 1], [0, 0, 0]]
