/* Better solution
const majorityElement = (array) => {
  const majority = Math.floor(array.length / 2);
  const map = new Map();

  for (const num of array) {
    map.set(num, (map.get(num) || 0) + 1);

    // If the count of the number is greater than the majority, return the number
    if (map.get(num) > majority) return num;
  }
  return null;
};
*/

// Moore's Voting Algorithm
const majorityElement = (array) => {
  let count = 0;
  let element = 0;

  for (let i = 0; i < array.length; i++) {
    const e = array[i];

    if (count === 0) {
      element = e;
      count = 1;
      continue;
    }

    if (e !== element) {
      count--;
    }
    if (e === element) {
      count++;
    }
  }

  return element;
};

const array = [2, 3, 3, 4, 2, 2, 4, 4, 2, 4, 4, 2, 2];
console.log(majorityElement(array)); // 4
