/**
 * Finds the maximum element in a bitonic array.
 * @param {Array} array - The bitonic array to search.
 * @returns {Number} - The maximum element in the bitonic array.
 */

const findMaxInBitonicArray = (array) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (array[mid] > array[mid - 1] && array[mid] > array[mid + 1]) {
      return mid;
    }

    if (array[mid + 1] > array[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

const bitonicArray = [1, 3, 5, 9, 8, 7, 6, 4, 2]; // [1, 3, 5, 7, 9, 8, 6]
const maxElement = findMaxInBitonicArray(bitonicArray);
console.log("Maximum element in the bitonic array:", maxElement);
