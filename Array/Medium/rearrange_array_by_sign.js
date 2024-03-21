const rearraangeArrayBySign = (array) => {
  const n = array.length;
  const result = [];
  let positiveIndex = 0;
  let negativeIndex = 1;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element >= 0) {
      result[positiveIndex] = element;
      positiveIndex += 2;
    }

    if (element < 0) {
      result[negativeIndex] = element;
      negativeIndex += 2;
    }
  }

  return result.filter(Number);
};

const array = [-1, 2, -3, 4, 5, 6, -7, -8, 5, 6, 7, 8];
console.log(rearraangeArrayBySign(array)); // [2, -1, 4, -3, 5, -7, 6, -8, 5, 6, 7, 8]
