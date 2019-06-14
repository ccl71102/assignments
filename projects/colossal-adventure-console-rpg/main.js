
const readline = require("readline-sync");
let sleep = require("thread-sleep");

//global variables

let gameOver = false;
let killCount = 0;
let playerSteps = 0;
let enemyScanned = false;
const winCondition = Math.floor((Math.random() * 30) + 30);
const walkModeOptions = ["Walk", "Check Status"];
const fightOptions = ["Fire", "Check Status", "Scan Target", "Run"];

console.log(winCondition);

//Show game name and some intro for flavor

console.log("[Exciting Placeholder Intro]");

//Create player - ask for info

const player = new Actor();

player.name = readline.question("[Enter your name]\n");

//select class

const classes = ["Heavy Gunner: 125 HP | 20 DMG | 85 DEF", "Operative: 100 HP | 30 DMG | 50 DEF", "Ghost: 75 HP | 50 DMG | 25 DEF"];
const playerClassSelect = readline.keyInSelect(classes,"[Select your class]");

if(playerClassSelect === -1) {
    gameOver = true;
}

//assign class

setPlayerClass(playerClassSelect);

//start game

while(!gameOver) {
    //walk mode
    walk(readline.keyInSelect(walkModeOptions, "[You narrow down your options to the following]"));
}

//if the game is gameOver, show game over message regardless of outcome

console.log("\nGAME OVER");

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
    this.getActorClass = function() {
        switch(this.actorClass) {
            case 0: return "Heavy Gunner";
            case 1: return "Operative";
            case 2: return "Ghost";
            default: return "Fiend";
        }
    }
}

function walk(answer){
    switch(answer)  {
        case 0: 
            if(isAmbushed()) {
                fightMode(createEnemy());
                playerSteps++;
                checkEndGame();
                
            }
            else {
                showRandomWalkMessage();
                playerSteps+= Math.floor((Math.random() + 1 ) * 4);
                checkEndGame();
            }
            break;
        case 1:
            showPlayerStats();
            break;
        default:
            if(isAmbushed()) {
                fightMode(createEnemy());
                playerSteps++;
                checkEndGame();
            }
            else {
                showRandomWalkMessage();
                playerSteps+= Math.floor((Math.random() + 1 ) * 4);
                checkEndGame();
            }
            break;
    }
}

function checkEndGame(){
    if(playerSteps >= winCondition)
        endGame();
}

function showRandomWalkMessage(){
    let index = Math.floor(Math.random() * 4);

    if(player.health >= 75){
        switch(index) {
            case 0: console.log("\n[You march one step closer to oblivion]");
                    break;
            case 1: console.log("\n[You press on towards your objective]");
                    break;
            case 2: console.log("\n[You confidenly move ahead]");
                    break;
            case 3: console.log("\n[You press on, determined to complete your mission]");
                    break;
            default: console.log("\n[You march one step closer to oblivion]");
                    break;
        }
    } else if(player.health >= 50) {
        switch(index) {
            case 0: console.log("\n[You march one step closer to oblivion]");
                    break;
            case 1: console.log("\n[You press on towards your objective]");
                    break;
            case 2: console.log("\n[You confidenly move ahead]");
                    break;
            case 3: console.log("\n[You press on, determined to complete your mission]");
                    break;
            default: console.log("\n[You march one step closer to oblivion]");
                    break;
        }
    } else if(player.health > 25) {
        switch(index) {
            case 0: console.log("\n[You march one step closer to oblivion]");
                    break;
            case 1: console.log("\n[You press on towards your objective]");
                    break;
            case 2: console.log("\n[You confidenly move ahead]");
                    break;
            case 3: console.log("\n[You press on, determined to complete your mission]");
                    break;
            default: console.log("\n[You march one step closer to oblivion]");
                    break;
        }
    }   else if(player.health <= 25) {
            switch(index) {
                case 0: console.log("\n[You march one step closer to oblivion]");
                        break;
                case 1: console.log("\n[You press on towards your objective]");
                        break;
                case 2: console.log("\n[You confidenly move ahead]");
                        break;
                case 3: console.log("\n[You press on, determined to complete your mission]");
                        break;
                default: console.log("\n[You march one step closer to oblivion]");
                        break;
            }
    }  
}

function showPlayerStats() {
    console.log("\nSoldier Profile:");
    sleep(500);
    console.log("Name: " + player.name);
    sleep(100);
    console.log("Specialization: " + player.getActorClass());
    sleep(100);
    console.log("\nSoldier Status:");
    sleep(500);
    console.log("Health: " + player.health + " HP");
    sleep(100);
    console.log("Weapon Damage: " + player.damage + " DMG");
    sleep(100);
    console.log("Armor Strength: " + player.armor + " DEF");
    sleep(100);
    console.log("Inventory: " + player.getInventory());
    sleep(100);
}

function setPlayerClass(index) {

    switch (index)  {
        case 0: 
            player.health = 125;
            player.damage = 20;
            player.armor = 85;
            player.updateInventory("Light Machine Gun");
            player.actorClass = 0;
            break;
        case 1: 
            player.health = 100;
            player.damage = 30;
            player.armor = 50;
            player.updateInventory("Assault Rifle");
            player.actorClass = 1;
            break;
        case 2:
            player.health = 75;
            player.damage = 50;
            player.armor = 25;
            player.updateInventory(".50 Cal Anti-Materiel Rifle");
            player.actorClass = 2;
            break;
        default:
            player.health = 50;
            player.damage = 5;
            player.armor = 0;
            player.updateInventory("Bare Fists");
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
    console.log("\n[" + enemy.name + " ambushes you]");

    let fightOver = false;
    enemyScanned = false;

    while(!fightOver) {
        console.log("\n"+player.name + "'s health: " + player.health);

        //need to scan enemy for health to show up on HUD
        if(enemyScanned)
            console.log(enemy.name + "'s health: " + enemy.health);
        else
            console.log(enemy.name + "'s health: Unknown");

        const choice = readline.keyInSelect(fightOptions, "[Your finger is firmly pressed against the trigger]");
        let runChance = 0;

        //let player attack first

        if(choice !== 1 && choice !== 2) {

            switch(choice) {
                case 0:
                    attack(player, enemy);
                    break;
                case 3: 
                    runChance = Math.floor(Math.random() * 2);
                    if(runChance === 0) {
                        console.log("\n[SUCCESS: You ran away]");
                        return;
                    } else {
                        console.log("\n[FAILURE: There is no escape]");
                    }
                    break;
                default:
                        runChance = Math.floor(Math.random() * 2);
                    if(runChance === 0) {
                        console.log("\n[SUCCESS: You ran away]");
                        return;
                    } else {
                        console.log("\n[FAILURE: There is no escape]");
                    }
                    break;

            }

            //check if anyone died after player attack

            if(enemy.health <= 0 && !fightOver) {
                console.log("\n[" + enemy.name + " has been eliminated]");
                console.log("\n[You extract its remaining lifeforce, gaining 25 HP]");
                player.updateInventory(enemy.getInventory());
                player.health += 25;
                killCount++;
                fightOver = true;
            } 

            if(player.health <= 0 && !fightOver) {
                console.log("\n[You now lie on the ground, your final thoughts reminding you that Earth and everything you hold dear will now be lost]");
                console.log("\nMISSION STATUS: FAILED");
                console.log("OPERATIVE STATUS: DECEASED");
                console.log("TARGETS ELIMINATED: "+killCount);
                fightOver = true;
                gameOver = true;
            }

            //enemy gets to attack now
            if(!fightOver)
                attack(enemy, player);

            if(enemy.health <= 0 && !fightOver) {
                console.log("\n[" + enemy.name + " has been eliminated]");
                console.log("\n[You extract its remaining lifeforce, gaining 25 HP]");
                player.updateInventory(enemy.getInventory());
                player.health += 25;
                killCount++;
                fightOver = true;
            } 

            if(player.health <= 0 && !fightOver) {
                console.log("\n[You now lie on the ground, your final thoughts reminding you that Earth and everything you hold dear will now be lost]");
                console.log("\nMISSION STATUS: FAILED");
                console.log("OPERATIVE STATUS: DECEASED");
                console.log("TARGETS ELIMINATED: "+killCount);
                fightOver = true;
                gameOver = true;
            } 
        } else if(choice  === 1)
                    showPlayerStats();
                else
                    scanTarget(enemy);
    }
}

function scanTarget(enemy){
    enemyScanned = true;
    console.log("Scanning...");
    sleep(500);
    console.log("\nTarget Scan Complete");
    sleep(100);
    console.log("Category Name: " + enemy.name);
    sleep(100);
    console.log("Status: " );
    sleep(100);
    console.log("Threat Level: " );
    sleep(100);
}

function createEnemy() {
    const enemyType = Math.floor(Math.random() * 5);
    switch(enemyType) {
        case 0: return new Actor("Horror", 25, 5, 0,["Junk"]);
        case 1: return new Actor("Mauler", 50, 10, 0, ["Junk"]);
        case 2: return new Actor("Torment", 75, 10, 0, ["Junk"]);
        case 3: return new Actor("Wraith", 75, 15, 20, ["Junk"]);
        case 4: return new Actor("Oblivion", 100, 20, 50, ["Junk"]);
        default: break;
    }
}

function attack(attacker, defender){

    const attackDamage = Math.floor(Math.random() * (attacker.damage - 5) + attacker.damage);
    console.log("\n[" + attacker.name + " does " + attackDamage + " HP of damage]");
    defender.health -= attackDamage;
}

function calculateChanceToHit(playerClass) {

    switch(playerClass) {
        case 0: return Math.random() * 100;
        case 1: return Math.floor(Math.random() * 3);
        case 2: return Math.floor(Math.random() * 2);
        default: return Math.floor(Math.random() * 3);
    }
}

function endGame() {

    if (player.health >= 100) {
        console.log("\nGolden ending");
        console.log("\nMISSION STATUS: ACCOMPLISHED");
        console.log("OPERATIVE STATUS: UNKNOWN");
        console.log("TARGETS ELIMINATED: " + killCount);

    } else if(player.health < 100 || player.health >= 50) {
        console.log("\nGood ending");
    } else if(player.healh < 50 || player.health >= 25) {
        console.log("\nNormal ending");
    } else if(player.health < 25) {
        console.log("\n...Ok ending, I guess");
    }

    gameOver = true;
}

