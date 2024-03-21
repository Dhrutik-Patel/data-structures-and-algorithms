const maxProfit = (array) => {
  let maxProfit = 0;
  let minPrice = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < minPrice) {
      minPrice = array[i];
    } else {
      maxProfit = Math.max(maxProfit, array[i] - minPrice);
    }
  }
  return maxProfit;
};

const array = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(array));
