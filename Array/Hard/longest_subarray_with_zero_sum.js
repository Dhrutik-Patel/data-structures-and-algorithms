const LongestSubarrayWithZeroSum = (array) => {
  const map = new Map();
  let sum = 0;
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];

    if (sum === 0) {
      max = i + 1;
    } else {
      if (map.has(sum)) {
        max = Math.max(max, i - map.get(sum));
      } else {
        map.set(sum, i);
      }
    }
  }
  return max;
};

const array = [15, -2, 2, -8, 1, 7, 10, 23];
console.log(LongestSubarrayWithZeroSum(array)); // 5
