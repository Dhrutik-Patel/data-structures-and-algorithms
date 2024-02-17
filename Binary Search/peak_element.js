/**
 * Finds a peak element in an array.
 * @param {Array} array - The array to search.
 * @returns {Number} - A peak element in the array. If multiple peak elements exist, returns any one of them. If no peak element is found, returns -1.
 */

const findPeakElement = (array) => {
  let low = 0;
  let high = array.length - 1;

  if (array[low] > array[low + 1]) {
    return array[low];
  }

  if (array[high] > array[high - 1]) {
    return array[high];
  }

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (array[mid] > array[mid - 1] && array[mid] > array[mid + 1]) {
      return mid;
    }

    if (array[mid - 1] > array[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

const array = [5, 10, 20, 15, 14, 13, 12, 11];
const peakElement = findPeakElement(array);
console.log("Peak element:", peakElement);
