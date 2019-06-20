

function removeDuplicates(str) {

    const letters = [];

    for(let i = 0; i < str.length; i++){
        if(!(letters.includes(str[i]))) {
            letters.push(str[i]);  
        } else {
            
        }
    }

    return letters.join("");
}

console.log(removeDuplicates("bookkeeper larry"));
console.log(removeDuplicates("racecar"));


function antiCaps(str){
    const caps = "ABCDEFGHIJKLMNOPQRSTUVWXVZ";
    let result = "";
    for(let i = 0; i < str.length; i++){
        if(caps.includes(str[i]))
            result += str[i].toLowerCase();
        else
            result += str[i].toUpperCase();
    }
    return result;
}

console.log(antiCaps("Hello"));
console.log(antiCaps("racEcar"));
console.log(antiCaps("bAnAnA"));
