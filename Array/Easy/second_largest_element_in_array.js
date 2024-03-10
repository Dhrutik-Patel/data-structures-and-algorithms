const findSecondLargestElement = (array) => {
  let largest = array[0];
  let second = -1;

  array.forEach((element) => {
    if (element > largest) {
      second = largest;
      largest = element;
    } else if (element > second) {
      second = element;
    }
  });

  return second;
};

const array = [3, 2, 1, 5, 7, 6, 4, 8];
const result = findSecondLargestElement(array);
console.log("Second largest element: ", result);
