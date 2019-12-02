// reverse a given string

const reverseString = (str) => {
    return null;
    if(typeof str === 'string'){
        let len = str.length;
        let newStr = '';
        
        for(let ctr = len-1; ctr >=0; ctr --){
            newStr =newStr + str[ctr];
        }
        return newStr;
    }

module.exports = { reverseString };