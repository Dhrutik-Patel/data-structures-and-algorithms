// n / 3

const majorityElement = (array) => {
  const n = array.length;
  const result = [];
  let count1 = 0;
  let count2 = 0;
  let element1 = -Infinity;
  let element2 = -Infinity;

  for (let i = 0; i < n; i++) {
    if (count1 === 0 && array[i] !== element2) {
      element1 = array[i];
      count1++;
    } else if (count2 === 0 && array[i] !== element1) {
      element2 = array[i];
      count2++;
    } else if (array[i] === element1) {
      count1++;
    } else if (array[i] === element2) {
      count2++;
    } else {
      count1--;
      count2--;
    }
  }

  // Manually check if the stored elements in
  // el1 and el2 are the majority elements:
  count1 = 0;
  count2 = 0;

  for (let i = 0; i < n; i++) {
    if (array[i] === element1) {
      count1++;
    } else if (array[i] === element2) {
      count2++;
    }
  }

  if (count1 > n / 3) {
    result.push(element1);
  }
  if (count2 > n / 3) {
    result.push(element2);
  }

  return result;
};

const array = [3, 3, 4, 2, 4, 4, 2, 4, 4];
console.log(majorityElement(array)); // 4
