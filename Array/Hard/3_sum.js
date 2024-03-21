const threeSum = (array) => {
  array.sort((a, b) => a - b); // [-4, -1, -1, 0, 1, 2]
  const result = [];

  for (let i = 0; i < array.length; i++) {
    // Skip duplicates
    if (i > 0 && array[i] === array[i - 1]) {
      continue;
    }

    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const sum = array[i] + array[left] + array[right];

      if (sum === 0) {
        result.push([array[i], array[left], array[right]]);
        left++;
        right--;

        while (left < right && array[left] === array[left - 1]) {
          left++;
        }

        while (left < right && array[right] === array[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};

const array = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(array));
