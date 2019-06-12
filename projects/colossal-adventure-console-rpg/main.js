
const readline = require("readline-sync");

//initialize global variables

let done = false;
let daysPassed = 0;
let steps = 0;

let player = {
    name: "",
    health: 0,
    attack: 0,
    defense: 0
}

//player setup

console.log("[After weeks of travel, you stumble upon a massive dungeon]");
console.log("[A cloaked figure stands before you]");
console.log("Gatekeeper: Halt, traveler.");
const playerName = readline.question("Gatekeeper: Before I allow you passage, I need to know your name:\n");

player.name = playerName;
const classes = ["Knight", "Mercenary","Berserker"];

console.log("Gatekeeper: " + player.name + "? I'll save it for the records.");
const playerClass = readline.keyInSelect(classes, "Gatekeeper: What is your profession?");

createPlayer(playerClass);
acknowledgeClass(playerClass);

while(!done) {

    moveMode();   

}

function createPlayer(index) {

    switch(index) {
        case 0: //knight
            player.attack = 25;
            player.health = 500;
            player.defense = 75;
        case 1: //mercenary
            player.attack = 50;
            player.health = 300;
            player.defense = 50;
        case 2: //berserker
            player.attack = 100;
            player.health = 250;
            player.defense = 25;
        default: //hard mode
            player.attack = 25;
            player.health = 250;
            player.defense = 25;
    }
}

function acknowledgeClass(index){

    switch(index) {
        case 0:
            console.log("Very well, Sir "+player.name+". You should be able to outlast your enemies... for a time. Go right in");
            break;
        case 1:
            console.log("You look ready for anything, " + player.name+". Get inside.");
            break;
        case 2:
            console.log("The best defense is a good offense, right? Get inside, "+player.name+".");
            break;
        default:
            console.log("Wait, you have zero combat experience? And you still want to go inside?");
            console.log("It's your funeral. Or maybe you know what you're doing. I won't stop you.");
        }
}

function moveMode() {
    const chance = 100*Math.random();
    const move = readline.question("[Enter 'w' to move]:\n");
    if(move === "w" || move === "W") {
        console.log(chance);
        if(chance <= 33) {
            fightMode();
        } else {
        console.log("[You move swiftly through the dark dungeon]");
        }
    }
 
}

function fightMode() {
    getEnemy();
}


function getEnemy() {
    const enemyType = Math.floor(Math.random() * (3)); 

    //skeleton = 0, skeleton champion  = 1, skeleton murderlord = 2

    console.log(enemyType);

    switch(enemyType) {
        case 0:  let skeleton = {
            name: "Skeleton",
            health: 100,
            attack: 10,
        };
        return skeleton;
        case 1: let skeletonChampion = {
            name: "Skeleton Champion",
            health: 300,
            attack: 30
        };
        return skeletonChampion;
        case 2: let skeletonMurderlord = {
            name: "Skeleton Murderlord",
            health: 1000,
            attack: 500
        };
        return skeletonMurderlord; 
        default: let skeletonMurderlord = { //shouldn't happen, but just in case...
            name: "Skeleton Murderlord",
            health: 1000,
            attack: 500
        };
        return skeletonMurderlord; 
    }
}
