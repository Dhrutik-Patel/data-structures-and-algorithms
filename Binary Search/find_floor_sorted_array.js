/**
 * Finds the floor of an element in a sorted array.
 * @param {Array} array - The sorted array to search.
 * @param {Number} target - The element to find the floor for.
 * @returns {Number} - The floor of the target element. If no such element exists, returns -1.
 */

const findFloor = (array, target) => {
  let low = 0;
  let high = array.length - 1;
  let result = -1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    console.log(high, mid, low);

    if (array[mid] > target) {
      high = mid - 1;
    } else {
      result = array[mid];
      low = mid + 1;
    }
  }
  return result;
};

const sortedArray = [1, 2, 8, 10, 10, 12, 19];
const target = 2;
const floor = findFloor(sortedArray, target);
console.log("Floor of", target, "is", floor);
