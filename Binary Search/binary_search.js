/**
 * Perform binary search on a sorted array.
 * @param {Array} array - The sorted array to search.
 * @param {Number} target - The target element to search for.
 * @returns {Number} - The index of the target element if found, otherwise -1.
 */
const binarySearch = (array, target) => {
  let low = 0;
  let high = array.length - 1;

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

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 10;
const res = binarySearch(array, target);
console.log("Element present at index: ", res);
