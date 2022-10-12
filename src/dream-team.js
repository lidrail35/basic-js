const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //console.log('++', members);
  if (!Array.isArray(members)) return false;
  return members.filter(x => typeof x === 'string').map(x => x.trim()[0].toUpperCase()).sort().join('')
//  members.filter(x => typeof x === 'string');
//   return members.filter(x => typeof x === 'string').map(x => x.trim()).sort().map(x => x[0]).join('').toUpperCase();
//   a.filter(x => typeof x === 'string').map(x => x.trim()).map(x => x[0].toUpperCase()).sort().join('')
  //return members.sort().map(x => typeof x==='string' ? x.trim()[0].join(''): '');
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  createDreamTeam
};
