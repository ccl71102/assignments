
const readline = require("readline-sync");

function largest(arr1){
    let largest = arr1[0];
    for(let i = 0; i < arr1.length; i++) {
        if(largest < arr1[i])
            largest = arr1[i];
    }
    return largest;
}

console.log(largest([5,49,20,10,23,99,3,24]));

function lettersWithStrings(arr1) {
    let arr2 = [];
    let found = false;
    for(let i = 0; i < arr1.length; i++) {
        found = false;
        for(let j = 0; j < arr1[i].length; j++) {
            let charVal = arr1[i][j].charCodeAt(0);
            if(!found && ((charVal > 64 && charVal < 91) || (charVal > 96 && charVal < 123))) {
                found = true;
                arr2.push(arr1[i]);
            }
        }
    }
    return arr2;
}

console.log(lettersWithStrings(["4h%324","3#(@*","293","hello","C32e","{!2@*(u"]));

function isDivisible(num1, num2) {
    if(num1 % num2 === 0)
        return true;
    else
        return false;
}

console.log(isDivisible(4,2)); //true
console.log(isDivisible(9,3)); //true
console.log(isDivisible(15,4)); //false

