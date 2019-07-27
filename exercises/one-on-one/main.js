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

const get12HourFormat = d => {
    if(d.getHours() > 12)
        return d.getHours() - 12;
    else if (d.getHours === 0)
        return 12;
    else
        return d.getHours();
}

const getMonth = d => {
    const months = [
                        "January", 
                        "February", 
                        "March", 
                        "April",
                        "May",
                        "June",
                        "July",
                        "August",
                        "September",
                        "October",
                        "November",
                        "December"
                    ];
    
    return months[d.getMonth()];
}

const getDate = () => {

    let d = new Date();
    d.setMinutes(d.getMinutes() + 30);
    let month = getMonth(d);
    let day = getDate();
    let suffix = d.getHours() >= 12 ? 'PM' : "AM";
    let hour = get12HourFormat(d);
    let minutes = d.getMinutes();

    return `Your order has been placed and should be ready on ${month} ${day} by ${hour}:${minutes} ${suffix}.`;
}

console.log(getDate())
