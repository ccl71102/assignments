
const readline = require("readline-sync");

//Show game name and some intro for flavor

//console.log("Placeholder Intro");

//Create player - ask for info

const player = new Actor();

player.name = readline.question("Enter your name");

//select class

const classes = ["Heavy Gunner", "Operative", "Ghost"];

setPlayerClass(readline.keyInSelect(classes,"Select your class"));

//global variables

let done = false;
let playerSteps = 0;
const walkModeOptions = ["Walk", "Check Status"];
const fightOptions = ["Fire", "Run"];

//start game

while(!done) {
    //walk mode
    const answer = readline.keyInSelect(walkModeOptions, "Your options");
    
    switch(answer)  {
        case 0: 
            if(isAmbushed()) {
                fightMode(createEnemy());
            } else {
                console.log("You march one step closer into oblivion...");
                playerSteps++;
                if(playerSteps >= 100)
                    done = true;
            }
            break;
        case 1:
            console.log("Soldier Profile:");
            console.log("Name: " + player.name);
            console.log("Specialization: " + player.getActorClass());
            console.log("Soldier Status:");
            console.log("Health: " + player.health);
            console.log("Weapon Damage: " + player.damage);
            console.log("Armor: " + player.armor);
            console.log("Inventory: " + player.getInventory());
            break;
        default:
            break;
    }

}

//functions and constructors

function Actor(name = "Soldier", health = 100, damage = 20, armor = 0, inventory = [], actorClass = -1) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.armor = armor;
    this.inventory = inventory;
    this.actorClass = actorClass;
    this.getInventory = function() {
        return this.inventory;
    }
    this.updateInventory = function(item) {
        inventory.push(item);
    }
    this.getActorClass() = function() {
        switch(this.actorClass) {
            case 0: return "Heavy Gunner";
            case 1: return "Operative";
            case 2: return "Ghost";
            default: return "Fiend";
        }
    }
}

function setPlayerClass(index) {
    switch (index)  {
        case 0: 
            player.health = 125;
            player.damage = 10;
            player.armor = 85;
            player.updateInventory("Light Machine Gun");
            player.playerClass = 0;
            break;
        case 1: 
            player.health = 100;
            player.damage = 20;
            player.armor = 50;
            player.updateInventory("Assault Rifle");
            player.playerClass = 1;
            break;
        case 2:
            player.health = 75;
            player.damage = 50;
            player.armor = 25;
            player.updateInventory(".50 Cal Anti-Materiel Rifle");
            player.playerClass = 2;
            break;
        default:
            player.health = 50;
            player.damage = 5;
            player.armor = 0;
            player.updateInventory("Bare Fists");
            player.playerClass = -1;
            break;
    }

}

function isAmbushed() {
    const chance = Math.floor(Math.random() * 3);
    switch(chance) {
        case 0: 
            return true;
        default: 
            return false;
    }
}

function fightMode(enemy) {
    console.log("[A " + enemy.name + " ambushes you]");
    const choice = readline.keyInSelect(fightOptions, "Choose option");

    switch(choice) {
        case 0:
            attack(player, enemy);
            break;
        case 1: 
            if(runChance === 0) {
                console.log("You ran away");
                return;
            } else {
                console.log("Didn't work");
                attack(player, enemy);
            }
            break;
    }
}

function createEnemy() {
    const enemyType = Math.floor(Math.random() * 5);
    switch(enemyType) {
        case 0: return new Actor("Demon", 50, 10, 0,["Health"]);
        case 1: return new Actor("Bigger Demon", 75, 15, 0, ["Health"]);
        case 2: return new Actor("Biggest Demon", 100, 20, 0, ["Health"]);
        case 3: return new Actor("An Even Bigger Demon", 200, 25, 20, ["Health"]);
        case 4: return new Actor("Humongous Demon", 1000, 30, 50, ["Health"]);
        default: return new Actor("Largest Demon Ever", 3000, 50, 50, ["Health"]);
    }
}

function attack(attacker, defender){
    console.log("Health: " + defender.health);
    const attackDamage = Math.floor(Math.random() * (5 - attacker.damage) + attacker.damage);
    defender.health -= attackDamage;
    console.log("Damage Done: " + attackDamage);
    console.log("Health: " + defender.health);
}

function calculateChanceToHit(playerClass) {

    switch(playerClass) {
        case 0: return Math.random() * 100;
        case 1: return Math.floor(Math.random() * 3);
        case 2: return Math.floor(Math.random() * 2);
        default: return Math.floor(Math.random() * 3);
    }
}