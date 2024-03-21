const maximumProductSubarray = (array) => {
  let prefix = 1;
  let suffix = 1;
  let max = -Infinity;

  for (let i = 0; i < array.length; i++) {
    if (prefix === 0) prefix = 1;
    if (suffix === 0) suffix = 1;

    prefix = prefix * array[i];
    suffix = suffix * array[array.length - 1 - i];

    max = Math.max(max, prefix, suffix);
  }

  return max;
};

const array = [2, 3, -2, 4];

console.log(maximumProductSubarray(array)); // 6
