
const readline = require("readline-sync");
const sleep = require("thread-sleep");
// const JZZ = require('jzz');
// require('jzz-midi-smf')(JZZ);

//global variables

let gameOver = false;
let enemyScanned = false;
let killCount = 0;
let playerSteps = 0;
let totalOrganicMatter = 0;
const winCondition = Math.floor((Math.random() * 10) + 50);
const walkModeOptions = ["Walk", "Check Status", "Heal"];
const fightOptions = ["Fire", "Check Status", "Scan Target", "Run", "Heal"];

//MIDI player initialization

// var midiout = JZZ().openMidiOut();
// var data = require('fs').readFileSync('./audio/nooverkill.mid', 'binary');
// var smf = new JZZ.MIDI.SMF(data);
// var midi = smf.player();
// midi.connect(midiout);
// midi.play();

//Show game name and some intro for flavor

console.log("OPERATION: ZERO SIGNAL");
sleep(500);
console.log("DATE: June, 21, 2194");
sleep(500);
console.log("LOCATION: Amundsen–Scott Station, Antarctica");
sleep(500);
console.log("MISSION DEBRIEFING:");
console.log("Sightings of unknown entities have been spotted in the region for the last twenty years."); 
console.log("First contact occurred in 2177, which culminated in 6 research scientists killed.");
console.log("After several similar incidents, the Antarctic Treaty was modified to grant an exception to a small team of armed personnel who appeared to know how to engage these threats.");
console.log("");
console.log("You were currently the only operative assigned at the time the entities decided to launch a full scale");
console.log("assault by opening a portal, pressumably with the goal to mobilize and expand across Earth.");
console.log("No one else in the station knew of this, but you have been trained in case a scenario like this occurred.");
console.log("The world is counting on you to stop this incursion and you have the chance to end it before anyone finds out\n");
sleep(2000);

//Create player - ask for info

console.log("[You reached the armory; the voice activated lock has a request]\n");

const player = new Actor();
sleep(100);
player.name = readline.question("DOOR LOCK: User authentication required. Please say your name to continue:\n");

if(player.name === "") {
    player.name = "[CLASSIFIED]";
    console.log("\n[You have no time to waste. You smash the lock with a punch. The door unlocks]\n");
    sleep(500);
}
else {
    console.log("\n[The lock recognizes your voice. You then type in your passcode]\n");
    sleep(500);
    console.log("DOOR LOCK: Access granted.\n");
    sleep(100);
}

console.log("[You browse the vast selection of weapons, but only three of them catch your attention]");

//select class

const classes = [".50 Cal Light Machine Gun (Heavy Gunner): 125 HP | 30 DMG | 40 DEF | 70% HIT", ".50 Cal Hand Cannon (Operative): 100 HP | 40 DMG | 25 DEF | 80% HIT", ".50 Cal Anti-Materiel Rifle (Ghost): 75 HP | 50 DMG | 10 DEF | 90% HIT"];
const playerClassSelect = readline.keyInSelect(classes,"[Select your equipment]");

if(playerClassSelect === -1) {
    gameOver = true;
    console.log("\n[You decide to leave the armory and await your fate. Within hours humanity is driven to the brink of extinction]");
    sleep(2000);
    console.log("\nMISSION STATUS: ABORTED");
    sleep(100);
    console.log("OPERATIVE STATUS: DISAVOWED");
    sleep(100);
    console.log("TARGETS ELIMINATED: " + killCount);
} else {
    //assign class
    setPlayerClass(playerClassSelect);
    console.log("\n[You grab a portable nuclear device and your trusty " + player.getInventoryItemAtIndex(0) + " and head out] ");
    sleep(1000);
    console.log("\n[You step into the portal, knowing there is a chance you might not make it back]");
    sleep(1000);
    console.log("\n[You have entered the portal. You are not sure if this is another planet or dimension.");
    console.log("The environment is unlike anything you have seen before. Alien, yet familiar.");
    console.log("You decide to focus on heading toward the portal core and kill anything standing in your way]");
    sleep(1000);
}

//start game

while(!gameOver) {
    //walk mode
    walk(readline.keyInSelect(walkModeOptions, "[You narrow down your options]"));
}

//if the game is gameOver, show game over message regardless of outcome

sleep(500);
console.log("\nGAME OVER");

//functions and constructors

function Actor(name = "[CLASSIFIED]", health = 100, damage = 20, armor = 0, inventory = [], actorClass = -1, playerLoot = []) {
    this.name = name;
    this.health = health;
    this.damage = damage;
    this.armor = armor;
    this.inventory = inventory;
    this.actorClass = actorClass;
    this.playerLoot = playerLoot;
    this.getInventory = function() {
        return this.inventory.join(", ");
    }
    this.getInventoryItem = function(item) {
        return inventory.find(item => item);
    }
    this.getInventoryItemAtIndex = function(index) {
        return inventory[index]; //0 weapon
    }
    this.updateInventory = function(item) {
        inventory.push(item);
    }
    this.getActorClass = function() {
        switch(this.actorClass) {
            case 0: return "Heavy Gunner";
            case 1: return "Operative";
            case 2: return "Ghost";
            default: return "Abomination";
        }
    }
    this.getActorClassNumber = function() {
        return this.actorClass;
    }
    this.getHealingItem = function() {
        let healingItem = inventory.find( item => item === "Organic Matter");
        if(typeof healingItem === "undefined")
            return 0;
        else {
            inventory.pop();
            return healingItem;
        }
    }
}

function walk(answer){
    switch(answer)  {
        case 0: 
            if(isAmbushed()) {
                fightMode(createEnemy());
                checkEndGame();
                postFightWalk(true);  
            }
            else {
                showRandomWalkMessage();
                checkEndGame();
                postFightWalk(false);
            }
            break;
        case 1:
            showPlayerStats();
            break;
        case 2:
            heal();
            break;
        default:
            if(isAmbushed()) {
                fightMode(createEnemy());
                checkEndGame();
                postFightWalk(true);
            }
            else {
                showRandomWalkMessage();
                checkEndGame();
                postFightWalk(false);
            }
            break;
    }
}

function heal(){
    const healing = player.getHealingItem();
    if(healing === 0)
        console.log("\n[You have no organic matter to convert]");
    else {
            console.log("\n[You converted some organic matter, gaining 25 HP]");
            player.health += 25;
            totalOrganicMatter--;
        }
}

function checkEndGame(){
    if((winCondition - playerSteps) <= 10 && (playerSteps < winCondition))
        console.log("The portal core's light is nearly blinding you]");
    else if((winCondition - playerSteps) <= 20 && (playerSteps < winCondition))
        console.log("[You see the portal core off in the distance]");

    if(playerSteps >= winCondition)
        endGame();
}

function postFightWalk(fought) {
    if(fought) {
        switch(player.getActorClassNumber()) {
            case 0: playerSteps++;
                    break;
            case 1: playerSteps+= Math.floor((Math.random() * 3) + 1);
                    break;
            case 2: playerSteps+= Math.floor((Math.random() * 2) + 1);
                    break;
        }   
    } else {
        switch(player.getActorClassNumber()) {
            case 0: playerSteps+= Math.floor((Math.random() * 2) + 1);
                    break;
            case 1: playerSteps+= Math.floor((Math.random() * 5) + 1);
                    break;
            case 2: playerSteps+= Math.floor((Math.random() * 4) + 1);
                    break;
        }
    }     
}

function showRandomWalkMessage(){
    let index = Math.floor(Math.random() * 4);
    if(player.health >= 70){
        switch(index) {
            case 0: console.log("\n[You march one step closer to your target]");
                    break;
            case 1: console.log("\n[You press on towards your objective]");
                    break;
            case 2: console.log("\n[You move ahead]");
                    break;
            case 3: console.log("\n[You press on, determined to complete your mission]");
                    break;
            default: console.log("\n[You march one step closer to oblivion]");
                    break;
        }
    } else if(player.health > 35) {
        switch(index) {
            case 0: console.log("\n[Your wounds will not keep you from marching one step closer to your target]");
                    break;
            case 1: console.log("\n[You check yourself for injuries as you press on towards your objective]");
                    break;
            case 2: console.log("\n[You shrug off pain as you move ahead]");
                    break;
            case 3: console.log("\n[You clench your teeth and press on, determined to complete your mission]");
                    break;
            default: console.log("\n[You march one step closer to oblivion]");
                    break;
        }
    } else if(player.health <= 35) {
        switch(index) {
            case 0: console.log("\n[You are nearly overwhelmed by pain while marching one step closer to your target]");
                    break;
            case 1: console.log("\n[You limp on towards your objective]");
                    break;
            case 2: console.log("\n[Your resolve is tested as you move ahead]");
                    break;
            case 3: console.log("\n[You see your life flash before your eyes and you move forward, wondering if you will make it to your goal]");
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
    console.log("Equipment: " + player.getInventory());
    sleep(100);
}

function setPlayerClass(index) {
    switch (index)  {
        case 0: 
            player.health = 125;
            player.damage = 30;
            player.armor = 40;
            player.updateInventory(".50 Cal Light Machine Gun");
            player.updateInventory("Ammunition Fabricator");
            player.updateInventory("Portable Nuclear Device");
            player.updateInventory("Matter Extractor");
            player.actorClass = 0;
            break;
        case 1: 
            player.health = 100;
            player.damage = 40;
            player.armor = 25;
            player.updateInventory(".50 Cal Hand Cannon");
            player.updateInventory("Ammunition Fabricator");
            player.updateInventory("Portable Nuclear Device");
            player.updateInventory("Matter Extractor");
            player.actorClass = 1;
            break;
        case 2:
            player.health = 75;
            player.damage = 50;
            player.armor = 10;
            player.updateInventory(".50 Cal Anti-Materiel Rifle");
            player.updateInventory("Ammunition Fabricator");
            player.updateInventory("Portable Nuclear Device");
            player.updateInventory("Matter Extractor");
            player.actorClass = 2;
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

function fightModeCheckPlayerCondition(){
    if (player.health >= 70)
        return "[Your finger is firmly pressed against the trigger]";
    else if(player.health >= 35)
        return "[Your finger is twitching near the trigger]";
    else
        return "[You struggle to keep your " + player.getInventoryItemAtIndex(0) + " steady]";
}

function fightMode(enemy) {
    console.log("\n[" + enemy.name + " ambushes you]");

    let fightOver = false;
    enemyScanned = false;

    while(!fightOver) {

        console.log("\n["+player.name + "'s Health: " + player.health + " HP ]");

        //need to scan enemy for health to show up on HUD
        if(enemyScanned)
            console.log("[" + enemy.name + "'s Health: " + enemy.health + " HP ]");
        else
            console.log("[" + enemy.name + "'s Health: UNKNOWN]");

        console.log("[Organic Matter Available: " + totalOrganicMatter + "]");
        
        const choice = readline.keyInSelect(fightOptions, fightModeCheckPlayerCondition());
        let runChance = 0;

        //let player attack first

        if(choice !== 1 && choice !== 2) {

            switch(choice) {
                case 0:
                    if(attackHit(player.actorClass))
                        attack(player, enemy);
                    else
                        console.log("\n[Your shot misses the target]")
                    break;
                case 3: 
                    runChance = Math.floor(Math.random() * 2);
                    if(runChance === 0) {
                        console.log("\n[SUCCESS: You distracted the enemy and escaped]");
                        return;
                    } else {
                        console.log("\n[FAILURE: There is no escape]");
                    }
                    break;
                case 4:
                    heal();
                    break;
                default:
                        runChance = Math.floor(Math.random() * 2);
                    if(runChance === 0) {
                        console.log("\n[SUCCESS: You distracted the enemy and escaped]");
                        return;
                    } else {
                        console.log("\n[FAILURE: There is no escape]");
                    }
                    break;

            }

            //check if anyone died after player attack

            if(enemy.health <= 0 && !fightOver) {
                console.log("\n[" + enemy.name + " has been eliminated]");
                sleep(500);
                console.log("\n[You use your matter extractor to remove its remaining lifeforce, gaining 25 HP]");
                player.updateInventory(enemy.getInventory());
                console.log("[You obtained some Organic Matter]");
                totalOrganicMatter++;
                player.health += 25;
                killCount++;
                fightOver = true;
            } 

            if(player.health <= 0 && !fightOver) {
                console.log("\n[You now lie dead on the ground; Earth and everything you hold dear will now be lost]");
                sleep(2000);
                console.log("\nMISSION STATUS: FAILED");
                sleep(100);
                console.log("OPERATIVE STATUS: DECEASED");
                sleep(100);
                console.log("TARGETS ELIMINATED: "+killCount);
                fightOver = true;
                gameOver = true;
            }

            //enemy gets to attack now

            if(!fightOver)
                if(attackHit(enemy.actorClass))
                    attack(enemy, player);
                else   
                    console.log("\n[" + enemy.name + "'s attack misses]");

            if(enemy.health <= 0 && !fightOver) {
                console.log("\n[" + enemy.name + " has been eliminated]");
                sleep(500);
                console.log("\n[You use your matter extractor to remove its remaining lifeforce, gaining 25 HP]");
                player.updateInventory(enemy.getInventory());
                console.log("[You obtained some Organic Matter]");
                totalOrganicMatter++;
                player.health += 25;
                killCount++;
                fightOver = true;
            } 

            if(player.health <= 0 && !fightOver) {
                console.log("\n[You now lie dead on the ground; Earth and everything you hold dear will now be lost]");
                sleep(2000);
                console.log("\nMISSION STATUS: FAILED");
                sleep(100);
                console.log("OPERATIVE STATUS: DECEASED");
                sleep(100);
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
    console.log("Status: " + checkEnemyStatus(enemy));
    sleep(100);
    console.log("Threat Level: " + checkEnemyThreatLevel(enemy));
    sleep(100);
    console.log("Combat Information:\n" + checkEnemyTargetDescription(enemy));
}

function checkEnemyStatus(enemy){
    if(enemy.health < 15)
        return "Critically wounded";
    else if(enemy.health < 30)
        return "Moderately injured";
    else if(enemy.health < 50)
        return "Lightly injured";
    else 
        return "No visible wounds";
}

function checkEnemyThreatLevel(enemy){

    if(enemy.damage < 10)
        return "Low";
    else if(enemy.damage < 15)
        return "Medium";
    else if(enemy.damage < 20)
        return "High";
    else  
        return "Extreme";
}

function checkEnemyTargetDescription(enemy) {
    if(enemy.name === "Mauler")
        return "A humanoid foot soldier. Appears to fill the role of a common grunt. Allergic to bullets.";
    else if(enemy.name === "Hunter")
        return "A floating mass of tentacles, capable of cloaking (although it only seems to this while scouting targets.";
    else if(enemy.name === "Horror")
        return "A mass of flesh, claws, and teeth. Expect some resistance.";
    else if(enemy.name === "Mutilator")
        return "A slender, lightly armored humanoid organism with sharp blades protruding from its arms. Highly dangerous; avoid engaging if possible.\n";
    else if(enemy.name === "Annihilator")
        return "A tall, armored, cybernetically enhanced biped creature.\nIf encountered, consult a mortician.";
}

function createEnemy() {
    const enemyType = Math.floor(Math.random() * 5);
    switch(enemyType) {
        case 0: return new Actor("Mauler", Math.floor(Math.random() * 5 + 50), 10, 0,["Organic Matter"]);
        case 1: return new Actor("Hunter", Math.floor(Math.random() * 5 + 70), 5, 0, ["Organic Matter"]);
        case 2: return new Actor("Horror", Math.floor(Math.random() * 5 + 70), 15, 0, ["Organic Matter"]);
        case 3: return new Actor("Mutilator", Math.floor(Math.random() * 5 + 100), 20, 10, ["Organic Matter"]);
        case 4: return new Actor("Annihilator", Math.floor(Math.random() * 5 + 150), 30, 15, ["Organic Matter"]);
        default: break;
    }
}

function attack(attacker, defender){

    let attackDamage = 0;

        switch(attacker.actorClass) {
            case 0: 
                attackDamage = Math.floor(Math.random() * (attacker.damage - (Math.random() * 5)) + attacker.damage);
                if(attackDamage <= defender.armor)
                    console.log("\n[" + attacker.name + " fires a barrage of bullets art " + defender.name + "; " + " the bullets could not penetrate its armor]");
                else
                    console.log("\n[" + attacker.name + " fires a barrage of bullets at " + defender.name + ", causing " + (attackDamage - defender.armor) + " HP of damage]");
                break;
            case 1:
                attackDamage = Math.floor(Math.random() * (attacker.damage - (Math.random() * 3)) + attacker.damage);
                if(attackDamage <= defender.armor)
                    console.log("\n[" + attacker.name + " fires at " + defender.name + "; " + " the bullets could not penetrate its armor]");
                else
                    console.log("\n[" + attacker.name + " fires at " + defender.name + ", causing " + (attackDamage - defender.armor) + " HP of damage]");
                break;
            case 2:
                attackDamage = Math.floor(Math.random() * (attacker.damage - (Math.random() * 2)) + attacker.damage);
                if(attackDamage <= defender.armor)
                    console.log("\n[" + attacker.name + " fires a well placed shot on " + defender.name + "; " + " the bullets could not penetrate its armor]");
                else
                    console.log("\n[" + attacker.name + " fires a well placed shot on " + defender.name + ", causing " + (attackDamage - defender.armor) + " HP of damage]");
                break;
            default:
                attackDamage = Math.floor(Math.random() * (attacker.damage - 5) + attacker.damage);
                if(defender.actorClass !== 2 ) {
                    switch(attacker.name)
                    {
                        case "Mauler": 
                            if(attackDamage <= defender.armor)
                                console.log("\n[" + attacker.name + " hits " + defender.name + " with the back of its rifle; your body armor absorbed all damage]");
                            else
                                console.log("\n[" + attacker.name + " hits " + defender.name + " with the back of its rifle, causing " + (attackDamage - defender.armor) + " HP of damage]");
                            break;
                        case "Hunter":
                                if(attackDamage <= defender.armor)
                                console.log("\n[" + attacker.name + " strangles " + defender.name + " with its tenctacles; your body armor absorbed all damage]");
                            else
                                console.log("\n[" + attacker.name + " strangles " + defender.name + " with its tenctacles, causing " + (attackDamage - defender.armor) + " HP of damage]");
                            break;
                        case "Horror":
                                if(attackDamage <= defender.armor)
                                console.log("\n[" + attacker.name + " lashes at " + defender.name + "; your body armor absorbed all damage]");
                            else
                                console.log("\n[" + attacker.name + " lashes at " + defender.name + ", causing " + (attackDamage - defender.armor) + " HP of damage]");
                            break;
                        case "Mutilator":
                                if(attackDamage <= defender.armor)
                                console.log("\n[" + attacker.name + " lashes at " + defender.name + "; your body armor absorbed all damage]");
                            else
                                console.log("\n[" + attacker.name + " lashes at " + defender.name + ", causing " + (attackDamage - defender.armor) + " HP of damage]");
                            break;
                        case "Annihilator":
                                if(attackDamage <= defender.armor)
                                console.log("\n[" + attacker.name + " kicks " + defender.name + "; your body armor absorbed all damage]");
                            else
                                console.log("\n[" + attacker.name + " kicks " + defender.name + ", causing " + (attackDamage - defender.armor) + " HP of damage]");
                            break;
                    }
                } else {
                    switch(attacker.name) {
                        case "Mauler": 
                            if(attackDamage <= defender.armor)
                                console.log("\n[" + attacker.name + " fires at " + defender.name + "; your body armor absorbed all damage]");
                            else
                                console.log("\n[" + attacker.name + " fires at " + defender.name + ", causing " + (attackDamage - defender.armor) + " HP of damage]");
                            break;
                        case "Hunter":
                                if(attackDamage <= defender.armor)
                                console.log("\n[" + attacker.name + " fires beams at " + defender.name + "; your body armor absorbed all damage]");
                            else
                                console.log("\n[" + attacker.name + " fires beams at " + defender.name + ", causing " + (attackDamage - defender.armor) + " HP of damage]");
                            break;
                        case "Horror":
                                if(attackDamage <= defender.armor)
                                console.log("\n[" + attacker.name + " throws rock at " + defender.name + "; your body armor absorbed all damage]");
                            else
                                console.log("\n[" + attacker.name + " throws rock at " + defender.name + ", causing " + (attackDamage - defender.armor) + " HP of damage]");
                            break;
                        case "Mutilator":
                                if(attackDamage <= defender.armor)
                                console.log("\n[" + attacker.name + " fires at " + defender.name + "; your body armor absorbed all damage]");
                            else
                                console.log("\n[" + attacker.name + " fires at " + defender.name + ", causing " + (attackDamage - defender.armor) + " HP of damage]");
                            break;
                        case "Annihilator":
                                if(attackDamage <= defender.armor)
                                console.log("\n[" + attacker.name + " shoots a massive plasma blast " + defender.name + "; your body armor absorbed all damage]");
                            else
                                console.log("\n[" + attacker.name + " shoots a massive plasma blast " + defender.name + ", causing " + (attackDamage - defender.armor) + " HP of damage]");
                            break;
                    }   
                }                         
        
            } 
            if(attackDamage <= defender.armor) {
                //skip - no damage done
            } else
                defender.health -= (attackDamage - defender.armor);
    
}

function attackHit(playerClass) {
    let chance = Math.floor(Math.random() * 10);
    switch(playerClass) {
        case 0: if(chance >= 3)
                    return true;
                else
                    return false;
        case 1: if(chance >= 1)
                    return true;
                else
                    return false;
        case 2: if(chance >= 2)
                    return true;
                else
                    return false;
        default: if(chance >= 4)
                    return true;
                else
                    return false;
    }
}

function endGame() {

    if (player.health >= 100) {
        console.log("\n[You made it to the portal core. You attempt to initiate the detonation sequence of your portable nuclear device. As the sequence starts, you proceed to dash towards the portal's exit before it collapses. After reach the exit, you retreat to a safe distance and watch the portal disappear into thin air. You pat yourself on the back knowing that Earth has been saved before the real invasion ever began]");
        sleep(2000);
        console.log("\nMISSION STATUS: COMPLETE");
        sleep(100);
        console.log("OPERATIVE STATUS: ALIVE");
        sleep(100);
        console.log("TARGETS ELIMINATED: " + killCount);

    } else if(player.health < 100 || player.health >= 50) {
        console.log("\n[You made it to the portal core with minor injuries. You attempt to initiate the detonation sequence of your portable nuclear device. As the sequence starts, you proceed to dash towards the portal's exit before it collapses. Before you reach the exit, an energy blast of unknown origin hits you and knocks you out cold. You are somehow aware that the portal has been destroyed, but you are unsure of your current whereabouts]");
        sleep(2000);
        console.log("\nMISSION STATUS: COMPLETE");
        sleep(100);
        console.log("OPERATIVE STATUS: UNKNOWN");
        sleep(100);
        console.log("TARGETS ELIMINATED: " + killCount);
        
    } else if(player.healh < 50 || player.health >= 20) {
        console.log("\n[You made it to the portal core with considerable injuries. Knowing you will not be able to make it out in time, you attempt to initiate the detonation sequence of your portable nuclear device. The sequence starts, giving you just enough time to smile as you realize that you thwarted their invasion and Earth will now be safe]");
        sleep(2000);
        console.log("\nMISSION STATUS: COMPLETE");
        sleep(100);
        console.log("OPERATIVE STATUS: DECEASED");
        sleep(100);
        console.log("TARGETS ELIMINATED: " + killCount);

    }   else if(player.health < 20) {
        console.log("\n[You made it to the portal core with grave injuries. Knowing you will not be able to make it out in time, you attempt to initiate the detonation sequence of your portable nuclear device. The device is badly damage and the sequence is unable to start. You finally succumb to your injuries, fully aware that humanity will be erased from history within the next few hours]");
        sleep(2000);
        console.log("\nMISSION STATUS: FAILED");
        sleep(100);
        console.log("OPERATIVE STATUS: DECEASED");
        sleep(100);
        console.log("TARGETS ELIMINATED: " + killCount);
    }

    gameOver = true;
}

