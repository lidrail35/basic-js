const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],

  addLink(value = '( )') {
    this.chain.push(`( ${value} )`);
    return this;
  },

  removeLink(pos) {
    if ( (typeof pos === 'number') && 
         (pos > 0) &&
         (pos < this.chain.length+1) ) {
      this.chain.splice(pos-1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }  
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  
  finishChain() {
    const a = [...this.chain];
    this.chain=[];
    return a.join('~~');
  }
};


module.exports = {
  chainMaker
};
