const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = [];
  let count = 0;
  
  for (let row = 0; row < matrix.length; row++) {
    arr[row] = [];
    for (let col = 0; col < matrix[row].length; col++) {
      count=0;
        for (let i = row-1; i <= (row + 1); i++) {
          if ( (i < 0) || (i > matrix.length-1) ) continue;
            for (let j = col-1; j <= (col + 1); j++) {
              if ( (j < 0) || (j > matrix[row].length-1) ) continue;
                if ( (i === row) && (j === col) ) continue;
                if (matrix[i][j]) count++; 
            }
        } 
      arr[row][col] = count;
    }
  }
 return arr;
}

module.exports = {
  minesweeper
};
