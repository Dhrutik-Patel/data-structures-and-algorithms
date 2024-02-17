/**
 * Finds the index of the first occurrence of 1 in a binary sorted infinite array.
 * @param {Array} array - The binary sorted infinite array to search.
 * @returns {Number} - The index of the first occurrence of 1. If 1 is not found, returns -1.
 */
const indexOfFirstOne = (array) => {
  let low = 0;
  let high = 1;
  let result = -1;

  while (array[low] === array[high]) {
    low = high;
    high = high * 2;
  }

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (array[mid] === 1) {
      result = mid;
    }

    if (array[mid] === 0) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
};

const binaryInfiniteArray = [
  0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 /*...*/,
];
const firstOneIndex = indexOfFirstOne(binaryInfiniteArray);
console.log("Index of the first occurrence of 1:", firstOneIndex);
