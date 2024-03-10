/* Better solution
const rotateArrayByKPlace = (arr, k) => {
  const newArr = [];
  k = k % arr.length; // handle cases where k > arr.length

  for (let i = k; i < arr.length; i++) {
    newArr.push(arr[i]);
  }

  for (let i = 0; i < k; i++) {
    newArr.push(arr[i]);
  }

  return newArr;
};
*/

/* Optimal solution */
const reverseArray = (arr, start, end) => {
  while (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
};

const rotateArrayByKPlace = (arr, n, k) => {
  k = k % n;

  reverseArray(arr, 0, n); // [7, 6, 5, 4, 3, 2, 1]
  reverseArray(arr, 0, k - 1); // [5, 6, 7, 4, 3, 2, 1]
  reverseArray(arr, k, n); // [5, 6, 7, 1, 2, 3, 4]

  return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
const k = 1;
console.log(rotateArrayByKPlace(arr, arr.length - 1, k)); // [5, 6, 7, 1, 2, 3, 4]
