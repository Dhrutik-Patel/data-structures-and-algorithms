const longestConsecutiveSequence = (array) => {
  const set = new Set(array);
  let max = 0;

  for (let i = 0; i < array.length; i++) {
    if (!set.has(array[i] - 1)) {
      let current = array[i];
      let count = 1;
      while (set.has(current + 1)) {
        current++;
        count++;
      }
      max = Math.max(max, count);
    }
  }
  return max;
};

const array = [100, 4, 200, 1, 3, 2];
console.log(longestConsecutiveSequence(array)); // 4
