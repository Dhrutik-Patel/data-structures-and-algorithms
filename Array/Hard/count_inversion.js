const conquer = (array, startIndex, midIndex, endIndex) => {
  const result = [];
  let left = startIndex;
  let right = midIndex + 1;
  let inversions = 0;

  while (left <= midIndex && right <= endIndex) {
    if (array[left] <= array[right]) {
      result.push(array[left]);
      left++;
    } else {
      result.push(array[right]);
      right++;
      // Count the number of inversions.
      inversions += midIndex - left + 1;
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

  return inversions;
};

const divide = (array, startIndex, endIndex) => {
  if (startIndex >= endIndex) return 0;

  const mid = startIndex + Math.floor((endIndex - startIndex) / 2);

  const leftInversions = divide(array, startIndex, mid);
  const rightInversions = divide(array, mid + 1, endIndex);

  const mergeInversions = conquer(array, startIndex, mid, endIndex);

  return leftInversions + rightInversions + mergeInversions;
};

const countInversion = (array) => {
  return divide(array, 0, array.length - 1);
};

const array = [5, 3, 2, 1, 4];

console.log(countInversion(array)); // Output: 6
