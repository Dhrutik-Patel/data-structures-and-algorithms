/**
 * Finds the number of times a sorted array is rotated.
 * @param {Array} array - The sorted array to search.
 * @returns {Number} - The number of rotations in the array.
 */
const countRotations = (array) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    if (array[low] <= array[high]) {
      return low;
    }

    let mid = low + Math.floor((high - low) / 2);
    let prev = (mid + array.length - 1) % array.length;
    let next = (mid + 1) % array.length;

    if (array[mid] <= array[prev] && array[mid] <= array[next]) {
      return mid;
    }

    if (array[mid] >= array[low]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

// Example usage:
const rotatedArray = [11, 12, 15, 18, 20, 2, 4];
const rotations = countRotations(rotatedArray);
console.log("Number of rotations:", rotations);
