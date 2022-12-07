// ATM PROJECT:
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
const sleep = (v) => new Promise(r => setTimeout(r, v));
let userBalance = Math.ceil(Math.random() * 100000);
// let accountNumber = 'PK00000123456789';
let accountNumber = '123';
// STARTING HIGHLIHTS
async function titleIndc() {
    figlet.text("ATM Project", function (err, data) {
        if (err) {
            console.log(err);
        }
        console.log(chalk.magenta(data));
    });
}
// await titleIndc()
const nameIndc = async () => {
    let developerName = chalkAnimation.rainbow(`
=============================================================
                MADE BY HARISH VITHAL
=============================================================
    `);
    await sleep(4000);
    developerName.stop();
};
// user login functionality
const login = async () => {
    let userInfo = await inquirer.prompt([{
            name: 'Username',
            type: 'input',
            message: chalk.magenta('Enter user name: ')
        },
        {
            name: 'Password',
            type: 'password',
            message: chalk.magenta('Enter Password: ')
        }
    ]);
    // console.log("value", userInfo)
    if (userInfo.Username && userInfo.Password) {
        console.log(`
        ${chalk.green("User logged Successfully")}\n
        User Detail: 
        Name: ${userInfo.Username}
        Account Number: ${accountNumber}
        Current Balance: ${userBalance}
        `);
    }
    else {
        console.log(chalk.red("Invalid Inputs Please input again"));
        await login();
    }
};
// need to work on validation
// ATM FUNCTIONALITIES 
async function checkingAccountBalance() {
    let userAcNo = await inquirer.prompt([{
            name: 'AccountNumber',
            type: 'input',
            message: 'Enter your 16 digits Account number: '
        }]);
    if (userAcNo.AccountNumber === accountNumber) {
        const spinner = createSpinner(chalk.yellow('Please wait ATM is Checking Your Account Balance... ')).start();
        await sleep(3000);
        spinner.success();
        console.log(`\nYour Current Balance ${chalk.cyan(`${userBalance}`)}`);
    }
    else {
        console.log(chalk.red("Invalid Account Number, Please input valid account number from your details"));
        checkingAccountBalance();
    }
}
// WAITING FOR ATM FUNCTIONALITY TO BE LOADING
async function loading() {
    console.log(chalk.magenta("\nAtm is Loading Please wait...\n"));
}
// ATM FUNCTIONALITY USER SELECTION 
const funcitonsToPerform = async () => {
    const fuctionality = await inquirer.prompt([
        {
            type: "list",
            name: "Functions",
            message: "Which Function you want to perfrom?\n ",
            choices: ['Cash Withdraw', 'Cash Deposit', 'Checking Account Balance', 'Money Transfer']
        },
    ]);
    // console.log(fuctionality)
    if (fuctionality.Functions === "Cash Withdraw") {
        console.log("Cash withdraw  ");
    }
    else if (fuctionality.Functions === "Checking Account Balance") {
        checkingAccountBalance();
    }
    else if (fuctionality.Functions === "Cash Deposit") {
        console.log("Cash Deposit");
    }
    else if (fuctionality.Functions === "Money Transfer") {
        console.log("Money Tranfer");
    }
};
// await sleep(3000);
// await nameIndc();
// await login();
// await sleep(5000);
// await loading();
// await sleep(3000);
await funcitonsToPerform();
