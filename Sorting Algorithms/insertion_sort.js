/**
 * Sorts an array using the Insertion Sort algorithm.
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
const insertionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let j = i + 1;

    while (j > 0 && array[j - 1] > array[j]) {
      const temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j--;
    }
  }

  return array;
};

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted array:", sortedArray); // Output: [11, 12, 22, 25, 64]
