/**
 * Searches for an element in a row-wise and column-wise sorted matrix.
 * @param {Array} matrix - The row-wise and column-wise sorted matrix.
 * @param {Number} target - The element to search for.
 * @returns {Boolean} - True if the target element is found, otherwise false.
 */

const searchInMatrix = (matrix, target) => {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let row = 0;
  let col = cols - 1;

  while (row < rows || col >= 0) {
    if (matrix[row][col] === target) {
      return true;
    }

    if (matrix[row][col] > target) {
      col--;
    } else {
      row++;
    }
  }

  return false;
};

const matrix = [
  [1, 4, 7, 11],
  [2, 5, 8, 12],
  [3, 6, 9, 15],
  [10, 13, 14, 16],
];
const target = 10;
const found = searchInMatrix(matrix, target);
console.log("Element found:", found);

console.log(matrix[1]);
