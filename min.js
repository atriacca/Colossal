// function Character (type, name, lifePower, inventory, attackPower) {
//     // use the "this" keyword to reference each object 
//     // that is created from this constructor
//     this.type = type;
//     this.name = name;
//     this.lifePower = lifePower;
//     this.inventory = inventory;
//     this.attackPower = attackPower;
// }
const player = {
    // name: 'default',
    lifePower: 100,
    inventory: []
}
enemy = [{
    name: 'Banshee',
    lifePower: 100,
    attackPower: 10
},{
    name: 'Cyclops',
    lifePower: 80,
    attackPower: 15
},{
    name: 'Nudzig',
    lifePower: 90,
    attackPower: 30
}]
const rs = require('readline-sync');
var readlineSync = require('readline-sync'),
choices = [];
choices[1] = "Walk";
choices[2] = "Run";
choices[3] = "Fight";
choices[4] = "print stats";

console.log('Welcome to the Your Worst Nightmare video game!!');
const name = rs.question(`What is your name?`);
//player.name.push(name);
console.log(`Hello ${name}! In this game your character will be prompted for what to do next. Your character will encounter monsters who will try to kill you if you don't kill them first. Most prompts will have you choose to walk, run or fight. You may also select print to see your vital statistics.`)
index = rs.keyInSelect(choices, 'What would you like to do?');
if (index == [1]) 
    choseWalk();
else if (index == [2]) 
    choseRun();
else if (index == [3]) 
    choseFight();
else if (index == [4]) 
    printStats();
else 
nextMove()
//`A monster, ${enemy.name}, has spotted you. 
index = rs.keyInSelect(choices, 'What would you like to do?');
if (index == [1]) 
    choseWalk();
else if (index == [2]) 
    choseRun();
else if (index == [3]) 
    choseFight();
else if (index == [4]) 
    printStats();
nextMove()
function nextMove() {
    index = rs.keyInSelect(choices, 'What would you like to do now?');
    if (index == [1]) 
        choseWalk();
    else if (index == [2]) 
        choseRun();
    else if (index == [3]) 
        choseFight();
    else if (index == [4]) 
        printStats();
    nextMove()
}

function choseWalk() {
    let escape = (Math.random() * 4);
    if (escape < 3) {
        console.log(`You've escaped without incurring any harm.`)
        attackBack()
        console.log(`However, ${enemy.name} wanted a second chance and returned to inflict some damage. Your Life Power is now ${player.lifePower}`)
    } else {
        choseFight()
    }
    nextMove()
}
function choseRun() {
    let escape = (Math.random() * 2);
    if (escape < 1) {
        console.log(`You've escaped without incurring any harm.`)
        attackBack()
        console.log(`Unfortunately, ${enemy.name} followed you and was able to inflict some minor damage before you got away. Your Life Power is now ${player.lifePower}`)
    } else {
        console.log(`You escaped but you've absorbed some damage.`)
        player.lifePower = player.lifePower - enemy.attackPower
        console.log(`Your Life Power is now ${player.lifePower}`)
        attackBack()
        console.log(`Unfortunately, ${enemy.name} came back for seconds and inflicted additional damage. Your Life Power is now ${player.lifePower}`)
    } 
    nextMove()
}
function choseFight() {
    let playerFightDamage = (Math.random() * enemy.attackPower);
    let enemyFightDamage = (Math.random() * 20);
        player.lifePower = player.lifePower - playerFightDamage
        enemy.lifePower = enemy.lifePower - enemyFightDamage
        if (player.lifePower < 0) {
            playerDied ()
        }

        console.log(`You fought gallantly, but sustained some damage. Your Life Power is now ${player.lifePower}`)
        attackBack()
        console.log(`Apparently ${enemy.name} wasn't done with you and came back to inflict more damage. Your Life Power is now ${player.lifePower}`)
            if (enemy.lifePower < 0) {
                player.lifePower = player.lifePower + 20
                player.inventory.push('Magic Key')
                console.log(`What a great warrior you are! You've killed ${enemy.name}! This means your Life Power has been increased by 50 points and a Magic Key has been added to your inventory. Your Life Power is now ${player.lifePower}`)
            } else {
            console.log(`You've inflicted damage on ${enemy.name}. Its Life Power is now ${enemy.lifePower}`)
            }
        nextMove()
        }
function attackBack() {
    let playerDamage = (Math.random() * 10);
    player.lifePower = player.lifePower - playerDamage
    if (player.lifePower < 0) {
        playerDied ()
    }
    let randomDamage = (Math.random() * 10);
    enemy.lifePower = enemy.lifePower - enemyDamage
    if (enemy.lifePower < 0) {
        enemyDied ()
    }
}
function willEnemyAttack () {
    let attack = (Math.random() * 3);}
    if (attack < 1) {
        whoAttacks()
    } else {
        nextMove()
    }
function whoAttacks () {
    let whichEnemy = (Math.random() * 3);
    if (whichEnemy < 1) {
        console.log(`You've been attacked by ${enemy.name[0]}`)
    } else if (whichEnemy < 2) {
        console.log(`You've been attacked by ${enemy.name[1]}`)
    } else {
        console.log(`You've been attacked by ${enemy.name[2]}`)
    }
    choseFight()
}
function printStats() {
    console.log(`Your Life Power is currently ${player.lifePower} and your inventory includes ${player.inventory}`)
}
function playerDied() {
    console.log(`Sorry, ${player.name}, but you've sustained too much damage and DIED! Please play again.`)
}
function enemyDied() {
    console.log(`Great job, ${player.name}, you've killed ${enemy.name} and have won the game! How does it feel to have conquered Your Worst Nightmare? Please play again.`)
}
// function attackPower() {
//     let power = (Math.random() * 5);
//     if (power < 1) {

//     } else if (power < 2) {

//     } else if (power < 3) {

//     } else if (power < 4) {

//     } else {

//     }
// }

// function runOrFight() {
//     runOrFight = [run, fight