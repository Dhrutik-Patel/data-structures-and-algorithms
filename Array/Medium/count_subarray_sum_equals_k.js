const countSubarraySumEqualsK = (array, k) => {
  let count = 0;
  let sum = 0;
  const map = new Map();
  map.set(0, 1);

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
      console.log("Count: ", count);
    }
    map.set(sum, (map.get(sum) || 0) + 1);

    console.log("Map: ", map);
  }

  return count;
};

const array = [1, 2, 3, -3, 1, 1];
const k = 3;

console.log(countSubarraySumEqualsK(array, k)); // 5

/**
 * 1st iteration Map: 0 => 1
 * 2nd iteration Map: 1 => 1, 0 => 1
 *
 */
