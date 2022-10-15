const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (str === null) {str = 'null'};
  if (options.addition === null) {options.addition = 'null'};
  str += makeString(options.addition ?? '', 
                    options.additionRepeatTimes ?? 1, 
                    options.additionSeparator ?? '|');
  return makeString(str, options.repeatTimes ?? 1, 
                         options.separator ?? '+');
}

function makeString(str, rep, separator) {
  return (str + separator).repeat(rep).slice(0, -separator.length);
};

module.exports = {
  repeater
};
