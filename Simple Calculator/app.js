#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAmination from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
const sleep = () => new Promise(res => setTimeout(res, 2000));
async function wellcome() {
    let rainbowTitle = chalkAmination.rainbow("let's start Calculation");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.cyan(` 
     _____________________
    |  _________________  |
    | |              0. | |
    | |_________________| |
    |  ___ ___ ___   ___  |
    | | 7 | 8 | 9 | | + | |
    | |___|___|___| |___| |
    | | 4 | 5 | 6 | | - | |
    | |___|___|___| |___| |
    | | 1 | 2 | 3 | | x | |
    | |___|___|___| |___| |
    | | . | 0 | = | | / | |
    | |___|___|___| |___| |
    |_____________________|
    `));
}
await wellcome();
async function developerNameIndictor() {
    figlet.text('Cli Calculator by Harish Vithal', function (err, data) {
        console.log(chalk.magenta(data));
    });
}
// await firstFunc()
const askQuestion = async () => {
    const answer = await inquirer.prompt([
        {
            type: "list",
            name: "Operator",
            message: "Which Operation you want to perfrom?\n ",
            choices: ['Addition', 'Subtraction', 'Multiplication', 'Division']
        },
        {
            type: "number",
            name: "num1",
            message: "Enter the First number:  ",
        },
        {
            type: "number",
            name: "num2",
            message: "Enter the Second number: ",
        }
    ]);
    // spinner section
    const spinner = createSpinner(chalk.yellow('Checking answer... ')).start();
    await sleep();
    spinner.success();
    if (answer.Operator === "Addition") {
        console.log(chalk.green(`${answer.num1} + ${answer.num2} = ${answer.num1 + answer.num2}`));
    }
    else if (answer.Operator === "Subtraction") {
        console.log(chalk.green(`${answer.num1} - ${answer.num2} = ${answer.num1 - answer.num2}`));
    }
    else if (answer.Operator === "Multiplication") {
        console.log(chalk.green(`${answer.num1} * ${answer.num2} = ${answer.num1 * answer.num2}`));
    }
    else {
        console.log(chalk.green(`${answer.num1} / ${answer.num2} = ${answer.num1 / answer.num2}`));
    }
};
await developerNameIndictor();
const startAgain = async () => {
    do {
        await askQuestion();
        var again = await inquirer.prompt([
            {
                type: 'input',
                name: 'restart',
                message: chalk.magenta('Do you want to continue the game? Pres Y or N: ')
            }
        ]);
    } while (again.restart == 'y' || again.restart == "Y" || again.restart == 'yes' || again.restart == "YES");
};
function againStarterFunc() {
    setTimeout(() => startAgain(), 2000);
}
againStarterFunc();
