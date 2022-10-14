const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = `${n}`.split('');
  let temp = [];
  let arrEnd = [];
  
  for (let i = 0; i < arr.length; i++) {
    temp = [...arr];
    temp.splice(i, 1);
    arrEnd.push(+temp.join(''));
  }
  return arrEnd.sort( (a, b) => b-a )[0];
}

module.exports = {
  deleteDigit
};
