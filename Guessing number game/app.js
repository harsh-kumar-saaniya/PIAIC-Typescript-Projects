#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import figlet from 'figlet';
// TIMER
const sleep = (v) => new Promise(r => { setTimeout(r, v); });
// STARTING GAME DISPLAY:
const gameIndicator = async () => {
    let rainbowTitle = chalkAnimation.rainbow(`
                        NUMBER GUESSING GAME
    =====================================================================
            =====================================================
                ========================================
`);
    await sleep(4000);
    rainbowTitle.stop();
};
await gameIndicator();
const gameDetailIndicator = () => {
    console.log(`
    ${chalk.bgMagenta('INSTRUCTION ABOUT THIS GAME :')}
    ${chalk.bgMagenta('1.')} THERE ARE TOTAL THREE ROUND OF THIS GAME FIRST YOU WILL NEED TO GUESS ANY NUMBER BETWEEN ${chalk.bgMagenta('0 to 9')}
    ${chalk.bgMagenta('2.')} IF YOU GUESSED THE RIGHT NUMBER, THE SECOND ROUND WILL START
    ${chalk.bgMagenta('3.')} IF YOU WIN ALL THE ROUNDS YOU WILL BE WINNER OF THIS GAME 
    `);
};
gameDetailIndicator();
// GETTING THE NUMBER FROM USER
var winner = false;
var Totalchance = 5;
let counter = 0;
let minusChance = 5;
let randNum = Math.floor(Math.random() * 10);
const valueGetter = async () => {
    let userInput = await inquirer.prompt([{
            name: 'userInput',
            type: 'number',
            message: 'Please Guess any number: '
        }]);
    const spinner = createSpinner(chalk.yellow('Checking answer... ')).start();
    await sleep(3000);
    spinner.success();
    minusChance--;
    if (randNum === userInput.userInput) {
        winner = true;
        console.log(chalk.green("Wow, you guessed the right number...!!!"));
        winnerFunc();
    }
    else if (randNum > userInput.userInput) {
        winner = false;
        console.log(`${counter === 4 ? chalk.red('Opps... Guessed value is less than the winning number, and you just only had 5 chances You lose') : chalk.bgMagenta(`Opps... Guessed value is less than the winning number, you just only have ${minusChance} chance`)}`);
    }
    else if (randNum < userInput.userInput) {
        winner = false;
        console.log(`${counter === 4 ? chalk.red('Opps... Guessed value is greater than the winning number, and you just only had 5 chances you lose') : chalk.bgMagenta(`Opps... Guessed value is greater than the winning number, you just only have ${minusChance} chance`)}`);
    }
};
const newStarter = async () => {
    do {
        await valueGetter();
        counter++;
    } while (winner === false && counter < Totalchance);
};
await newStarter();
function winnerFunc() {
    figlet.text("Congratulation You Win...!!!", function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log(chalk.magenta(data));
    });
}
// valueGetter()
// MAKING THREE ROUNDS
// const againStarter = async () => {
//     do {
//         await valueGetter()
//         round++;
//         var again = await inquirer.prompt([
//             {
//                 name: "nextLevel",
//                 type: "input",
//                 message: (winner === true ? chalk.bgMagenta(`You won the ${round} round, Are you ready for the next round y or n?`) : "You lost the game, Best Luck!!!")
//             }
//         ])
//     }
//     while (winner === true && round < 4 && again.nextLevel == 'y' || again.nextLevel == "Y" || again.nextLevel == 'yes' || again.nextLevel == "YES");
// }
// await againStarter()
