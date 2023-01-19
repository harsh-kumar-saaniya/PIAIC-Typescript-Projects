#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
var score = 0;
const sleep = (v) => new Promise(r => setTimeout(r, v));
async function programName() {
    figlet.text("Quiz App", function (err, data) {
        if (err)
            console.log(err);
        console.log(chalk.yellow(`${data}
===============================================
===============================================

        `));
    });
}
await programName();
const quizRepresenter = async () => {
    let questions = await inquirer.prompt([
        {
            name: 'question1',
            type: 'list',
            message: chalk.magenta('Javascript can be used for Storing the forms contents to a database file on the server?'),
            choices: ['true', 'false']
        },
        {
            name: 'question2',
            type: 'list',
            message: chalk.magenta('Javascript is not an object oriented language?'),
            choices: ['true', 'false']
        },
        {
            name: 'question3',
            type: 'list',
            message: chalk.magenta('When Javascript was created?'),
            choices: [1990, 2000, 1995, 1996]
        },
        {
            name: 'question4',
            type: 'list',
            message: chalk.magenta('Javascript was invented by?'),
            choices: ['Guido van Rossum', 'Brendan Eich', 'James Gosling', 'Anders Hejlsberg']
        },
        {
            name: 'question5',
            type: 'list',
            message: chalk.magenta('Which is not a assigning operator in javascript?'),
            choices: ['-', '=', '==', '!=']
        },
    ]);
    if (questions.question1 == 'true') {
        score += 10;
    }
    if (questions.question2 == 'false') {
        score += 10;
    }
    if (questions.question3 === 1995) {
        score += 10;
    }
    if (questions.question4 === "Brendan Eich") {
        score += 10;
    }
    if (questions.question5 === "!=") {
        score += 10;
    }
    let scoreDisplayer = chalkAnimation.rainbow(`\n You got ${score} scores out of 50`);
    await sleep(4000);
    scoreDisplayer.stop();
};
const repeater = async () => {
    do {
        await quizRepresenter();
        var repeaterAns = await inquirer.prompt([{
            name: 'repeat',
            type: 'list',
            message: 'Would you like to repeat the Quiz Yes or no:',
            choices: ['Yes', 'No']
        }]);
    } while (repeaterAns.repeat === "Yes");
};
await sleep(3000);
await repeater();
