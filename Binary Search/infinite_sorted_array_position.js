/**
 * Searches for an element in an infinitely sorted array.
 * @param {Array} array - The infinitely sorted array to search.
 * @param {Number} target - The element to search for.
 * @returns {Number} - The index of the target element if found, otherwise -1.
 */

const searchInfiniteSortedArray = (array, target) => {
  let low = 0;
  let high = 1;

  while (array[high] < target) {
    low = high;
    high = high * 2;
  }

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

const infiniteSortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 /*...*/]; // Assume the array continues infinitely
const target = 3;
const index = searchInfiniteSortedArray(infiniteSortedArray, target);
console.log("Index of target element:", index);
