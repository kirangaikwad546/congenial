// add all the numerical properties of an object 

// example: obj = {
//     a:2,
//     b:4,
//     c: 'Hi'
// }

// result: 6
// return undefined in all other cases

const object_prop_addition = (obj) => {
   if(typeof obj !== 'object'){
    return undefined;   
}
let k =Object.keys(obj);
let r = undefined;
for(let i=0; i < k.length; i++){
    if(typeof obj[k[i]]== 'number'){
        r = obj[k[i]] + r || 0;  
    }
}
     return r
    }
    
module.exports = { object_prop_addition };