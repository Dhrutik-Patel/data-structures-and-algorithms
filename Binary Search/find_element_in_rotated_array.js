/**
 * Finds an element in a rotated sorted array.
 * @param {Array} array - The rotated sorted array to search.
 * @param {Number} target - The element to find.
 * @returns {Number} - The index of the target element if found, otherwise -1.
 */

function findElementInRotatedArray(array, target) {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    console.log(low, mid, high);

    if (array[mid] === target) {
      return mid;
    }

    if (array[mid] > array[low]) {
      // Left part is sorted
      if (target <= array[mid] && target >= array[low]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // Right part is sorted
      if (target >= array[mid] && target <= array[high]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
}

const array = [6, 7, 0, 1, 2, 3, 4, 5];
const target = 5;
const result = findElementInRotatedArray(array, target);
console.log("Element found at index: ", result);
