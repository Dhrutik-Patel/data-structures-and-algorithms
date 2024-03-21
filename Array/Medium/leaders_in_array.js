const leadersInArray = (array) => {
  const leaders = [];
  let max = Number.MIN_SAFE_INTEGER;
  let i = array.length - 1;

  while (i >= 0) {
    if (array[i] > max) {
      max = array[i];
      leaders.push(max);
    }
    i--;
  }

  return leaders;
};

const array = [16, 17, 4, 3, 5, 2];
console.log(leadersInArray(array)); // [17, 5, 2]
