/**
 * Finds the indexes of the first and last occurrences of an element in a sorted array with possibly duplicate elements.
 * @param {Array} array - The sorted array to search.
 * @param {Number} target - The element to find occurrences for.
 * @returns {Array} - An array containing the indexes of the first and last occurrences of the element. If the element is not found, returns [-1, -1].
 */

const findOccurrencesIndices = (array, target) => {
  const getOccurrence = (isFirst) => {
    let occurrenceIndex = -1;
    let low = 0;
    let high = array.length - 1;

    while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      if (array[mid] === target) {
        occurrenceIndex = mid;
        if (isFirst) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      } else if (array[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    return occurrenceIndex;
  };

  const firstOccurrence = getOccurrence(true);
  const lastOccurrence = getOccurrence(false);
  return [firstOccurrence, lastOccurrence];
};

const array = [2, 4, 8, 10, 12, 12, 12, 12, 12, 12, 20];
const target = 12;
const [firstIndex, lastIndex] = findOccurrencesIndices(array, target);
console.log(
  "First occurrence at index: ",
  firstIndex,
  "\nLast occurrence at index: ",
  lastIndex
);
