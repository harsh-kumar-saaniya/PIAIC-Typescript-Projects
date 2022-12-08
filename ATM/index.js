// ATM PROJECT:
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
let userBalance = Math.ceil(Math.random() * 100000);
let accountNumber = 'PK00000123456789';
let userPin = 1234;
let updatedBalance;
const sleep = (v) => new Promise(r => setTimeout(r, v));
// let accountNumber = '123';
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
async function cashWithDraw() {
    let withDrawingAmount;
    let pin = await inquirer.prompt([{
            name: 'Userpin',
            type: 'number',
            message: 'Please Enter your 4 digits pin: '
        }]);
    if (pin.Userpin === userPin) {
        const immediateFigure = await inquirer.prompt([
            {
                type: "list",
                name: "Amount",
                message: "Please select any amount from below options: \n ",
                choices: [1000, 2000, 3000, 4000, 5000, 10000, "Other Amount"]
            },
        ]);
        if (immediateFigure.Amount === "Other Amount") {
            let otherAmount = await inquirer.prompt([{
                    name: 'CustomAmount',
                    type: 'number',
                    message: 'Please Enter Amount: '
                }]);
            if (otherAmount.CustomAmount > userBalance) {
                console.log("Insuificent Balance! ");
                await cashWithDraw();
            }
            else {
                withDrawingAmount = otherAmount.CustomAmount;
                updatedBalance = userBalance - withDrawingAmount;
                console.log(`${withDrawingAmount} has WithDrawed, your current balance is ${updatedBalance}`);
            }
        }
        else {
            withDrawingAmount = immediateFigure.Amount;
            updatedBalance = userBalance - withDrawingAmount;
            console.log(`${withDrawingAmount} has WithDrawed, your current balance is ${updatedBalance}`);
        }
    }
    else {
        console.log('Invalid PIN, Please input the right pin as per the detail section');
        await cashWithDraw();
    }
}
// choice: 
async function checkingAccountBalance() {
    let userAcNo = await inquirer.prompt([{
            name: 'AccountNumber',
            type: 'input',
            message: 'Enter your 16 digits Account number: '
        }]);
    if (userAcNo.AccountNumber === accountNumber || userAcNo.AccountNumber === 'PK00000123456789' || userAcNo.AccountNumber === 'pk00000123456789') {
        const spinner = createSpinner(chalk.yellow('Please wait ATM is Checking Your Account Balance... ')).start();
        await sleep(3000);
        spinner.success();
        console.log(`\nYour Current Balance ${chalk.cyan(`${userBalance}`)}`);
    }
    else {
        console.log(chalk.red("Invalid Account Number, Please input valid account number from your details"));
        await checkingAccountBalance();
    }
}
// WAITING FOR ATM FUNCTIONALITY TO BE LOADING
async function loading() {
    console.log(chalk.magenta("\nAtm is Loading Please wait...\n"));
}
// ATM FUNCTIONALITY USER SELECTION 
const atmFunctions = async () => {
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
        await cashWithDraw();
    }
    else if (fuctionality.Functions === "Checking Account Balance") {
        await againRunner();
    }
    else if (fuctionality.Functions === "Cash Deposit") {
        console.log("Cash Deposit");
    }
    else if (fuctionality.Functions === "Money Transfer") {
        console.log("Money Tranfer");
    }
};
const againRunner = async () => {
    await checkingAccountBalance();
    var againChance = await inquirer.prompt([
        {
            name: 'Again',
            type: 'input',
            message: 'Would you like to use ATM again Y or N? '
        }
    ]);
    if (againChance.Again === "Y" || againChance.Again === "y" || againChance.Again === "YES" || againChance === "yes") {
        await atmFunctions();
    }
};
// await sleep(3000);
// await nameIndc();
await login();
// await sleep(5000);
// await loading();
// await sleep(3000);
await atmFunctions();
