/**
 * Question 1:Given a row and column index, find the value of that cell in Pascal's triangle.
 * Answer: nCr = n! / (r! * (n-r)!)
 */

const pascalTriangleRowColumn = (row, column) => {
  let result = 1;

  for (let i = 0; i < column; i++) {
    result = result * (row - i);
    result = result / (i + 1);
  }

  return result;
};

// console.log(pascalTriangleRowColumn(5, 3));

/**
 * Question 2: Given a row index, print the values of that row in Pascal's triangle.
 */

const pascalTriangleRow = (row) => {
  let answer = 1;
  const result = [];

  for (let i = 0; i <= row; i++) {
    result.push(answer);
    answer = answer * (row - i);
    answer = answer / (i + 1);
  }

  return result;
};

// pascalTriangleRow(5);

/**
 * Question 3: Given a number n, print pattern for Pascal's triangle.
 */

const pascalTriangle = (n) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(pascalTriangleRow(i));
  }

  return result;
};

// console.log(pascalTriangle(5));
