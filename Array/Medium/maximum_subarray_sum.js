/* Kadane Algorithm */

const maximumSum = (array) => {
  let sum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    sum = sum + element;

    if (sum < 0) {
      sum = 0;
    }

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};

const array = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log("Maximum sum subarray: ", maximumSum(array));
