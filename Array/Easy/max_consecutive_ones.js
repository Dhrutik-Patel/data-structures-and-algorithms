const maxConsecutiveOnes = (array) => {
  let count = 0;
  let maxCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) {
      count++;
      maxCount = Math.max(count, maxCount);
    } else {
      count = 0;
    }
  }
  return maxCount;
};

const array = [1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1];
console.log(maxConsecutiveOnes(array)); // 4
