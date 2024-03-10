const findLargestElement = (array) => {
  let largest = array[0];

  array.forEach((element) => {
    if (element > largest) largest = element;
  });

  return largest;
};

const array = [3, 2, 1, 5, 7, 6];
const result = findLargestElement(array);
console.log("Largest element: ", result);
