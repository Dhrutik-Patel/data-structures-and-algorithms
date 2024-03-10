/* Brute force solution
const findLongestSubarrayWithGivenSum = (array, targetSum) => {
  let longestLength = 0;
  let currentLength = 0;
  let currentSum = 0;

  for (let start = 0; start < array.length; start++) {
    for (let end = start; end < array.length; end++) {
      currentSum += array[end];
      currentLength++;

      if (currentSum === targetSum) {
        longestLength = Math.max(longestLength, currentLength);
      }

      if (currentSum >= targetSum) {
        currentSum -= array[start];
        currentLength--;
        start++;
      }
    }
  }

  return longestLength;
};
*/

const findLongestSubarray = (array, K) => {
  let maxLength = 0;
  let i = 0;
  let j = 0;
  let currentSum = 0;

  while (j < array.length) {
    currentSum = currentSum + array[j];

    if (currentSum < K) {
      j++;
    } else if (currentSum === K) {
      maxLength = Math.max(maxLength, j - i + 1);
      j++;
    } else {
      while (currentSum > K && i <= j) {
        currentSum = currentSum - array[i];
        i++;
      }

      if (currentSum === K) {
        maxLength = Math.max(maxLength, j - i + 1);
      }
      j++;
    }
  }

  return maxLength;
};

const array = [1, 2, 3, 1, 1, 1, 4, 3, 2, 1, 1];
const k = 7;

console.log(findLongestSubarray(array, k)); // Output: 5
