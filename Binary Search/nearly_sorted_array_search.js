/**
 * Searches for an element in a nearly sorted array.
 * @param {Array} array - The nearly sorted array to search.
 * @param {Number} target - The element to search for.
 * @returns {Number} - The index of the target element if found, otherwise -1.
 */

const searchNearlySorted = (array, target) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (array[mid] === target) return mid;
    if (array[mid + 1] === target) return mid + 1;
    if (array[mid - 1] === target) return mid - 1;

    if (array[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

const nearlySortedArray = [5, 10, 30, 20, 40];
const target = 5;
const index = searchNearlySorted(nearlySortedArray, target);
console.log("Index of target element:", index);
