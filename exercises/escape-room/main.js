
const readline = require("readline-sync");

const name = readline.question("Welcome to the room.\n\nWhat is your name?:\n");

if(name === "")
    console.log("\nWelcome, stranger.\n");
else
    console.log("\nWelcome, " + name + ".\n");

console.log("You are trapped in a dark room. You see a hole in the wall and a door.");
console.log("The door has a keyhole in it. It yearns and beckons for a key.");

let done = false;
let hasKey = false;
let options = ["Put hand in hole", "Find the key", "Open the door", "Get ye flask"];

while(!done) {
    const answer = readline.keyInSelect(options, "What do you want to do?");
    switch(answer) {
        case 0: 
            console.log("\nYou died.\n");
            done = true;
            break;
        case 1:
            if(!hasKey) {
                hasKey = true;
                console.log("\nYou found a key.");
            } else {
                console.log("\nYou already have a key.");
            }
            break;
        case 2: 
            if(hasKey) {
                done = true;
                console.log("\nYou escaped the room.\n");
            } else {
                console.log("\nThe door won't budge.");
            }
            break;
        case 3:
            console.log("\nYou cannot get ye flask.");
            break;
        default:
            console.log("\nThere is no escape. There is only agony.");
            break;
    }
}