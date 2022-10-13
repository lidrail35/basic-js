const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  //console.log('+', date, typeof date, date instanceof Date);
  //console.log('++', date, typeof date.getUTCMonth, date.hasOwnProperty('getUTCMonth'));
  if (typeof date === 'undefined') {return 'Unable to determine the time of year!'}
  if (!(date instanceof Date)) {throw new Error('Invalid date!');}
  if (date.hasOwnProperty('toString')) {throw new Error('Invalid date!');}
  //Getownpropertynames?  GetOwnPropertySymbols
  //if (Object.getOwnPropertyNames(date)) {throw new Error('Invalid date!');}
  //if ( !(date.hasOwnProperty('getUTCMonth')) ) {throw new Error('Invalid date!');}
//  if (!(date instanceof Date)) {return('Invalid date!');}  

  let month = date.getMonth();
  let result = (month >=2 && month <= 4) ? 'spring' :
               (month >=5 && month <= 7) ? 'summer' :
               (month >=8 && month <= 10) ? 'autumn' : 'winter';
// remove line with error and write your code here
return result;
}

module.exports = {
  getSeason
};
