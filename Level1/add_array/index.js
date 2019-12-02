// adds number in given array , if not array returns undefined, if not number returns undefined

let addArray = (arr) => {
    if (arr === undefined ) {
        console.log('arr is undefined');
    } else if(arr === null) {
        console.log('arr is null');
    }
    return undefined;
}

module.exports = { addArray };