#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk'
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';

const sleep = (v: number) => new Promise(r => setTimeout(r, v));


async function programTitle() {
    figlet.text("WORD COUNTER", function (err, data) {
        if (err) {
            console.log(err)
        }
        console.log(chalk.magenta(data))
    });

}

await programTitle()
await sleep(3000);

const counterValueGetter = async () => {
    let value = await inquirer.prompt([{
        name: 'Text',
        type: "input",
        message: chalk.hex('#4A148C')('Please write the text or word here: ')
    }])

    const spinner = createSpinner(chalk.yellow('Please wait we are checking...')).start()
    await sleep(2000)
    spinner.success()


    const splitedValue = value.Text.split(' ')
    console.log("\n"+chalk.hex("#A7FFEB")(`Words in Text is: ${splitedValue.length}`))
    const characterWithoutSpace = value.Text.replace(/ /g, "");
    console.log(chalk.hex("#A7FFEB")(`Character in Text is: ${characterWithoutSpace.length}\n`))

}


async function startAgain() {
    do {
        await counterValueGetter()
        var restart = await inquirer.prompt([{
            name: 'startingProgram',
            type: "input",
            message: chalk.hex('#4A148C')('Would you like to restart the program: ')
        }])
    } while (restart.startingProgram == 'y' || restart.startingProgram == 'yes' || restart.startingProgram == 'YES' || restart.startingProgram == 'Y');
}


await startAgain()