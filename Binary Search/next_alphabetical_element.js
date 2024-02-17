/**
 * Finds the next alphabetical element in a sorted array.
 * @param {Array} array - The sorted array to search.
 * @param {String} target - The element to find the next alphabetical element for.
 * @returns {String} - The next alphabetical element. If no such element exists, returns null.
 */

const findNextAlphabetical = (array, target) => {
  let low = 0;
  let high = array.length - 1;
  let result = null;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (array[mid] > target) {
      result = array[mid];
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
};

const sortedArray = ["a", "c", "e", "g", "i", "k", "m"];
const target = "f";
const nextAlphabetical = findNextAlphabetical(sortedArray, target);
console.log("Next alphabetical element after", target, "is", nextAlphabetical);
