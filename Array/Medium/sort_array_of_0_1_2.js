const sortArrayOf012 = (array) => {
  let left = 0;
  let mid = 0;
  let right = array.length - 1;

  while (mid <= right) {
    switch (array[mid]) {
      case 0:
        [array[left], array[mid]] = [array[mid], array[left]];
        left++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        [array[mid], array[right]] = [array[right], array[mid]];
        right--;
        break;
    }
  }

  return array;
};

const array = [0, 1, 2, 0, 1, 2, 1, 2, 0, 0, 0, 1];
console.log("Sorted array of 0, 1, 2: ", sortArrayOf012(array));
