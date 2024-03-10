const findNumberAppearsOnce = (arr) => {
  let answer = 0;

  // Using XOR operator

  for (let i = 0; i < arr.length; i++) {
    answer ^= arr[i];
  }

  return answer;
};

const arr = [1, 1, 2, 2, 3, 4, 4, 5, 5];
console.log(findNumberAppearsOnce(arr));
