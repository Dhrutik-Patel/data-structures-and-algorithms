/**
 * Sorts an array using the Quick Sort algorithm.
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  const pivotIndex = Math.floor(array.length / 2);
  const pivotValue = array[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue;
    if (array[i] < pivotValue) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quickSort(left), pivotValue, ...quickSort(right)];
};

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = quickSort(unsortedArray);
console.log("Sorted array:", sortedArray); // Output: [11, 12, 22, 25, 64]
