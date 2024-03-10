/*
const twoSum = (nums, target) => {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }
};
*/

const twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  const sortedNums = nums.slice().sort((a, b) => a - b);

  while (left < right) {
    const sum = sortedNums[left] + sortedNums[right];

    if (sum === target) {
      return [sortedNums[left], sortedNums[right]];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

const nums = [2, 6, 5, 8, 11];
const target = 14;
console.log(twoSum(nums, target));
