const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      //console.log(i, arr[i],  Array.isArray(arr[i]) );
      if ( Array.isArray(arr[i]) ) {
//        console.log('222', arr[i]);
        count += calculateDepth(arr[i]);
      } 
    }
//  console.log('count', count);
    return count;
  }
}

module.exports = {
  DepthCalculator
};
