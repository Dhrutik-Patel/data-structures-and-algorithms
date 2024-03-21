const mergeOverlappingSubIntervals = (intervals) => {
  if (intervals.length <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastInterval = result[result.length - 1];

    if (currentInterval[0] <= lastInterval[1]) {
      lastInterval[1] = Math.max(currentInterval[1], lastInterval[1]);
    } else {
      result.push(currentInterval);
    }
  }

  return result;
};

const intervals = [
  [1, 3],
  [2, 6],
  [4, 10],
  [15, 18],
  [8, 10],
];

console.log(mergeOverlappingSubIntervals(intervals));
