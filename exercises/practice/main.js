
function reverseStr(str) {
    let arr = str.split("");
    arr = arr.reverse();
    str = arr.join("");
    return str;
}

console.log(reverseStr("hello"));

function isNumber(str) {
    return !(isNaN(str));
}

console.log(isNumber("4"));
console.log(isNumber("hello"));

function isEven(num) {
    if(!isNaN(num)) {
        if(Number(num) % 2 === 0)
            return true;
        else
            return false;
    }
        return false;
}

console.log(isEven(3));
console.log(isEven(6));
console.log(isEven("not a number"));

function average(arr){
    let result = 0;
    for(let i = 0; i < arr.length; i++) {
        if(!isNaN(arr[i]))
            result += arr[i];
        else 
            return "Error: invalid data";        
    }
    return result/arr.length;
}

console.log(average([5,-10,10,20]));

function combine(arr1, arr2) {
    let arrResult = [];
    let length;
    if(arr1.length > arr2.length)
        length = arr1.length;
    else    
        length = arr2.length;
        
    for(let i = 0; i < length; i++) {
        if(typeof arr1[i] !== "undefined")
            arrResult.push(arr1[i]);
        if(typeof arr2[i] !== "undefined")
            arrResult.push(arr2[i]);
   }
   return arrResult;
}

console.log(combine(["a","b","c","d","e","f","g"],[1, 2, 3, 4, 5, 6, 7, 8]));
