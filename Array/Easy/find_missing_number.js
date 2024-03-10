/* Using sum of n natural numbers formula to find the missing number in the array.
const findMissingNumber = (array, n) => {
  let total = (n * (n + 1)) / 2;

  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return total - sum;
};
*/

// Using XOR operator to find the missing number in the array.
const findMissingNumber = (array, n) => {
  let xor1 = 0;
  let xor2 = 0;

  for (let i = 0; i < n - 1; i++) {
    xor2 = xor2 ^ array[i];
    xor1 = xor1 ^ (i + 1);

    console.log("\n");
    console.log("XO1: ", xor1);
    console.log("XO2: ", xor2);
  }

  xor1 = xor1 ^ n;
  return xor1 ^ xor2;
};

const array = [1, 2, 4, 5, 6];
const n = 6;
console.log(findMissingNumber(array, n)); // 5
