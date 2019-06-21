//Not part of the project, just some solo exercises

// function removeDuplicates(str) {

//     const letters = [];

//     for(let i = 0; i < str.length; i++){
//         if(!(letters.includes(str[i]))) {
//             letters.push(str[i]);  
//         } else {
            
//         }
//     }

//     return letters.join("");
// }

// console.log(removeDuplicates("bookkeeper larry"));
// console.log(removeDuplicates("racecar"));


// function antiCaps(str){
//     const caps = "ABCDEFGHIJKLMNOPQRSTUVWXVZ";
//     let result = "";
//     for(let i = 0; i < str.length; i++){
//         if(caps.includes(str[i]))
//             result += str[i].toLowerCase();
//         else
//             result += str[i].toUpperCase();
//     }
//     return result;
// }

// console.log(antiCaps("Hello"));
// console.log(antiCaps("racEcar"));
// console.log(antiCaps("bAnAnA"));

// Find the frequency of all characters in a given word or phrase, and print them to the console.

// Contain the characters and their counts within an object.
// Each character will be its own key
// Each value will be the character's frequency.


// const phrase = 'slimy smelly solution';

// function arrayIndex(str) {
//     const frequency = {};

//     for(let i = 0; i < str.length; i++){
//         if(frequency[str[i]]){
//             frequency[str[i]]++;
//         } else{
//             frequency[str[i]] = 1;
//         }
//     }

//     return frequency;
//   // Manipulation of str to create an object
// }

// console.log(arrayIndex(phrase));

//Output: { s: 3, l: 4, i: 2, m: 2, y: 2, ' ': 2, e: 1, o: 2, u: 1, t: 1, n: 1 }


