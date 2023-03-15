const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direction = true) {
    this.direction = direction;
  }

  verifyVariable(a, b) {
    if ( (typeof a == 'undefined') || (typeof b == 'undefined') ) {
      throw new Error("Incorrect arguments!") ;
    };
  }

  encrypt(text, key) {
    this.verifyVariable(text, key);
     
    let codestr = [];
    let textCode, 
        keyCode, 
        encryptCode;
    let offset = 0;
    key = key.toUpperCase();
    text = text.toUpperCase();
      for (let i = 0; i < text.length; i++) {
        if ( (text[i] < 'A') || (text[i] > 'Z') ) {
          codestr.push(text[i]);
          offset++;
          continue;
        } 
        textCode = text[i].charCodeAt();
        keyCode = key[(i - offset) % key.length].charCodeAt();
        encryptCode = String.fromCharCode( (( textCode + keyCode) % 26) + 65);
        codestr.push(encryptCode);
      }
    return this.direction ? codestr.join('') : codestr.reverse().join('');
   }

  decrypt(text, key) {
    this.verifyVariable(text, key);
    
    let codestr = [];
    let textCode,
        keyCode, 
        decryptCode
    let offset = 0;
    key = key.toUpperCase();
    for (let i = 0; i < text.length; i++) {
      if ( (text[i] < 'A') || (text[i] > 'Z') ) {
       codestr.push(text[i]);
        offset++;
        continue;
      } 
      textCode = text[i].charCodeAt();
      keyCode = key[(i - offset) % key.length].charCodeAt();
     
      (textCode < keyCode) ? 
              decryptCode = String.fromCharCode( (( textCode - keyCode) % 26) + 91) :
              decryptCode = String.fromCharCode( (( textCode - keyCode) % 26) + 65)
      
      codestr.push(decryptCode);
       }
    return this.direction ? codestr.join('') : codestr.reverse().join(''); 
  };
}

module.exports = {
  VigenereCipheringMachine
};
