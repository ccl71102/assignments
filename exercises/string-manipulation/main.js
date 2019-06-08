
const readline = require("readline-sync");

console.log("Hello!\n");
let firstName = readline.question("May I ask what your first name is ?\n");
console.log("\n"+ firstName + ", is it? That was my pet capybara's name, too!\n");
const lastName = readline.question("How about your last name?\n");
console.log("\n"+ lastName + "? Got it. I'll be sure to remember it.\n");
const age = readline.question("How old are you?\n");
if(!isNaN(age))
    console.log("\n" + age + "? You are " + (Number(20) + Number(age)) + " years older than my pet capybara. I miss the little guy.\n");
else
    console.log("I'm not sure what did you just type in, but we'll move on.");
const location = readline.question("Where do you live?\n");
console.log("\nI bet the weather in " + location + " is lovely this time of the year.\n");
console.log("Anyway, we're going to have some fun now.\n");
console.log("Your first name isn't exciting enough, so I fixed it.")
console.log("I'll call you " + allUpper(firstName) + " from now on. I think it sounds nicer.\n");
console.log("Your last name has " + numberOfChars(lastName) + " letters. That sounds like a lot!\n");
console.log("Speaking of a lot, I have a favor to ask...");
const longStr = longString();
const halfLong = splitString(longStr);
console.log("\nI ate half of it, but you can have this part back:\n" + halfLong + "");
console.log("\nHmm, how about I give you exactly what you want out of it.\n");

//todo - step 5
console.log("Here is the long strong you entered:\n" + longStr);
const startPos = readline.question("\nFrom which index would you like to have your long message back?\n");
console.log("\nOK! Here it is: \n" + extractSubString(longStr, startPos));
console.log("\nWell, that's all, " + allUpper(firstName)+".");
readline.question("\nSay goodbye.\n");
console.log("\nBye!");


function allUpper(str1){
    let str2 = "";
    for(let i = 0; i < str1.length; i++) {
        str2 += str1[i].toUpperCase();
    }
    return str2;
}

function numberOfChars(str1) {
    return str1.length;
}

function concatenate(str1, str2) {
    return str1 + " " + str2;
}

function longString() {
    done = false;
    while(!done)
    {
        const long = readline.question("\nEnter a really long message. 20 letters minimum. I'll know if you didn't add enough.\n");
        if(long.length > 19) {
            done = true;
            return long;
        } else {
            console.log("\nThat's not long enough! I warned you.");
            console.log("\nLet's try again...");
        }
    }
 
}

function splitString(str1) {
    return str1.substring(0,Math.floor(str1.length/2));
}

function extractSubString(str1, index) {
    return str1.substring(Number(index));
}