const mergeSortedArray = (array1, array2) => {
  let m = array1.length;
  let n = array2.length;

  let i = m - 1;
  let j = 0;

  while (i >= 0 && j < n) {
    if (array1[i] > array2[j]) {
      [array1[i], array2[j]] = [array2[j], array1[i]];
      i--;
      j++;
    } else {
      break;
    }
  }

  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  return [...array1, ...array2];
};

const array1 = [1, 3, 5, 7];
const array2 = [0, 2, 6, 8, 9];

console.log(mergeSortedArray(array1, array2)); // Output: [1, 2, 3, 6]
