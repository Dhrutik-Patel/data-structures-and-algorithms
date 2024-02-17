/**
 * Checks if it's possible to allocate books into 'k' partitions such that
 * no partition exceeds the given maximum number of pages.
 * @param {Array} books - Array of integers representing number of pages in each book.
 * @param {Number} k - Number of partitions to allocate.
 * @param {Number} maxPages - Maximum number of pages allowed in any partition.
 * @returns {Boolean} - True if feasible, false otherwise.
 */
const isFeasible = (books, k, maxPages) => {
  let partitions = 1;
  let pagesInCurrentPartition = 0;

  for (let i = 0; i < books.length; i++) {
    if (pagesInCurrentPartition + books[i] > maxPages) {
      partitions++;
      pagesInCurrentPartition = books[i];
    } else {
      pagesInCurrentPartition += books[i];
    }

    if (partitions > k) {
      return false;
    }
  }

  return true;
};

/**
 * Allocates minimum number of pages to each student such that the maximum
 * number of pages allocated to any student is minimized.
 * @param {Array} books - Array of integers representing number of pages in each book.
 * @param {Number} k - Number of students.
 * @returns {Number} - The minimum possible maximum number of pages allocated to any student.
 */
const allocateMinimumPages = (books, k) => {
  let low = Math.max(...books);
  let high = books.reduce((a, b) => a + b, 0);

  let result = -1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (isFeasible(books, k, mid)) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
};

const books = [25, 46, 28, 49, 24];
const k = 4;
const minPages = allocateMinimumPages(books, k);
console.log("Minimum pages allocated:", minPages);
