/**
 * Finds the minimum difference element in a sorted array.
 * @param {Array} array - The sorted array.
 * @param {Number} target - The element for which to find the minimum difference.
 * @returns {Number} - The minimum difference element.
 */

const findMinimumDifferenceElement = (array, target) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (array[mid] === target) {
      return 0;
    }

    if (array[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return array[low] - array[high];
};

const sortedArray = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const target = 3;
const minDiffElement = findMinimumDifferenceElement(sortedArray, target);
console.log("Minimum difference element to", target, "is", minDiffElement);
