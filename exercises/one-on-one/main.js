// reverseSentence = sentence => {
//     const arr = sentence.split(" ");
//     const reverseArr = arr.reverse()
//     return reverseArr.join(" ")
// }
 
// console.log(reverseSentence("I am Sam"))//=> Sam am I
// console.log(reverseSentence("Hello World")) //=> World Hello


// const twoSum = (arr, target) => {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = i + 1; j < arr.length; j++) {
//             if(arr[i] + arr[j] === target && i !== j)
//                 return [i, j];
//         }
//     }

//     return false;
// }

// console.log(twoSum([1, 2, 3], 4));
// console.log(twoSum([5, 2, 8, 40, 5, 12, 6], 20));

// const get12HourFormat = d => {
//     if(d.getHours() > 12)
//         return d.getHours() - 12;
//     else if (d.getHours === 0)
//         return 12;
//     else
//         return d.getHours();
// }

// const getMonth = d => {
//     const months = [ "January", 
//                         "February", 
//                         "March", 
//                         "April",
//                         "May",
//                         "June",
//                         "July",
//                         "August",
//                         "September",
//                         "October",
//                         "November",
//                         "December"];
//     return months[d.getMonth()];
// }

// const getDate = () => {

//     let d = new Date();
//     d.setMinutes(d.getMinutes() + 30);
//     let month = getMonth(d);
//     let day = d.getDate();
//     let suffix = d.getHours() >= 12 ? 'PM' : "AM";
//     let hour = get12HourFormat(d);
//     let minutes = d.getMinutes();

//     return `Your order has been placed and should be ready on ${month} ${day} by ${hour}:${minutes} ${suffix}.`;
// }

// getDate();


//Game of Threes
    // Write a recursive function that takes two integers, 
    // n and counter as parameters and does the following:

    // If the n is divisible by three, divide it by three and call the 
    // function again, providing the new value as n and counter + 1 as counter

    // If not, either add or subtract 1 to a get a new value that 
    // is divisible by three and repeat step 1.

    // If n is one, simply return the value counter.

function gameOfThrees(n, counter){
    
    if(n === 1)
        return counter;

    if(n%3 === 0){
        return gameOfThrees((n/3), (counter + 1))
    } 
    
    else {
        return gameOfThrees((n-1), counter)
    }
}

console.log(gameOfThrees(10000, 0))
// Output:  8




