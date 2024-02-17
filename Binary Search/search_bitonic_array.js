/**
 * Searches for an element in a bitonic array.
 * @param {Array} array - The bitonic array to search.
 * @param {Number} target - The element to search for.
 * @returns {Number} - The index of the target element if found, otherwise -1.
 */

const searchInBitonicArray = (array, target) => {
  const findPeak = (array) => {
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (array[mid] > array[mid - 1] && array[mid] > array[mid + 1]) {
        return mid; // Found the peak element
      } else if (array[mid] > array[mid - 1]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }

    return -1;
  };

  const ascendingBinarySearch = (array, target, low, high) => {
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      if (array[mid] === target) {
        return mid;
      }

      if (array[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return -1;
  };

  const descendingBinarySearch = (array, target, low, high) => {
    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      if (array[mid] === target) {
        return mid;
      }

      if (array[mid] < target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return -1;
  };

  const peakElement = findPeak(array);

  const rightSearch = ascendingBinarySearch(array, target, 0, peakElement - 1);
  if (rightSearch !== -1) return rightSearch;

  const leftSearch = descendingBinarySearch(
    array,
    target,
    peakElement + 1,
    array.length - 1
  );
  if (leftSearch !== -1) return leftSearch;

  return -1;
};

const bitonicArray = [1, 3, 5, 9, 11, 12, 8, 4, 2];
const target = 5;
const index = searchInBitonicArray(bitonicArray, target);
console.log("Index of the target element:", index);
