const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
  if (arr.length === 0) return arr;  
  
  let arrC = [...arr];
  for (let i=0; i < arrC.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        if (i > 0) {arrC[i - 1] = 'x';}
        arrC[i] = 'x';
      break;
      case '--double-prev':
        (i > 0) ? arrC[i] = arrC[i - 1] : arrC[i] = 'x';
      break;
      case '--double-next':
        (i < arrC.length-1) ? arrC[i] = arrC[i + 1] : arrC[i] = 'x';
      break;            
      case '--discard-next':
        (i < arrC.length) ? (arrC[i] = 'x', arrC[i + 1] = 'x') : arrC[i] = 'x';
      break;                        
    }
  }
  return arrC.filter(x => x !== 'x');
}

module.exports = {
  transform
};
