/**
 * Sorts an array using the Bubble Sort algorithm.
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i; j < array.length; j++) {
      if (array[j] < array[min]) min = j;
    }

    [array[min], array[i]] = [array[i], array[min]];
  }

  return array;
};

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray); // Output: [11, 12, 22, 25, 64]
