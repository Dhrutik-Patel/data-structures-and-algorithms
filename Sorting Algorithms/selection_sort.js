/**
 * Sorts an array using the Selection Sort algorithm.
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return array;
};

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = selectionSort(unsortedArray);
console.log("Sorted array:", sortedArray); // Output: [11, 12, 22, 25, 64]
