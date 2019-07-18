// reverseSentence = sentence => {
//     const arr = sentence.split(" ");
//     const reverseArr = arr.reverse()
//     return reverseArr.join(" ")
// }
 
// console.log(reverseSentence("I am Sam"))//=> Sam am I
// console.log(reverseSentence("Hello World")) //=> World Hello


const twoSum = (arr, target) => {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === target && i !== j)
                return [i, j];
        }
    }

    return false;
}

console.log(twoSum([1, 2, 3], 4));
console.log(twoSum([5, 2, 8, 40, 5, 12, 6], 20));