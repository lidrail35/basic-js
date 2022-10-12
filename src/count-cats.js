const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(box) {
  let count = 0;
  for (let i of box) {count += i.filter(x => x==='^^').length}
  return count
 //box.map(x => x.filter(y => y==='^^').length).length;
}

module.exports = {
  countCats
};
