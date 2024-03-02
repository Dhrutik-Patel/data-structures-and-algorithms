/**
 * Sorts an array using the Merge Sort algorithm.
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array.
 */

const conquer = (array, startIndex, midIndex, endIndex) => {
  const result = [];
  let left = startIndex;
  let right = midIndex + 1;

  while (left <= midIndex && right <= endIndex) {
    if (array[left] < array[right]) {
      result.push(array[left]);
      left++;
    } else {
      result.push(array[right]);
      right++;
    }
  }

  while (left <= midIndex) {
    result.push(array[left]);
    left++;
  }
  while (right <= endIndex) {
    result.push(array[right]);
    right++;
  }

  for (let index = startIndex; index <= endIndex; index++) {
    array[index] = result[index - startIndex];
  }
};

const divide = (array, startIndex, endIndex) => {
  if (startIndex === endIndex) return;

  const mid = startIndex + Math.floor((endIndex - startIndex) / 2);

  divide(array, 0, mid);
  divide(array, mid + 1, endIndex);
  conquer(array, startIndex, mid, endIndex);
};

const mergeSort = (array) => {
  divide(array, 0, array.length - 1);
  return array;
};

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = mergeSort(unsortedArray);
console.log("Sorted array:", sortedArray); // Output: [11, 12, 22, 25, 64]
