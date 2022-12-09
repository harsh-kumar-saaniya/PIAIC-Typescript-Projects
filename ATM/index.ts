// ATM PROJECT:
import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';


let userBalance = Math.ceil(Math.random() * 100000);
let accountNumber = 'PK00000123456789';
let userPin = 1234;

const sleep = (v: number) => new Promise(r => setTimeout(r, v));

// TITLE:
async function titleIndc() {
    figlet.text("ATM Project", function (err, data) {
        if (err) {
            console.log(err)
        }
        console.log(chalk.magenta(data))
    });

}

// await titleIndc()


const nameIndc = async () => {
    let developerName = chalkAnimation.rainbow(`
=============================================================
                MADE BY HARISH VITHAL
=============================================================
    `);
    await sleep(4000)
    developerName.stop()
}


// LOGIN FUNCTIONALITY: 

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
    ])

    if (userInfo.Username && userInfo.Password) {
        console.log(`
        ${chalk.green("User logged Successfully")}\n
        User Detail: 
        Name: ${userInfo.Username}
        Account Number: ${accountNumber}
        Current Balance: ${userBalance}
        User Pin: ${userPin}
        `)
    }
    else {
        console.log(chalk.red("Invalid Inputs Please input again"))
        await login()
    }
}
// need to work on validation


// ATM FUNCTIONALITIES:

async function cashWithDraw() {
    let withDrawingAmount: number;

    let pin = await inquirer.prompt([{
        name: 'Userpin',
        type: 'number',
        message: 'Please Enter your 4 digits pin: '
    }])

    if (pin.Userpin === userPin) {
        const immediateFigure = await inquirer.prompt([
            {
                type: "list",
                name: "Amount",
                message: "Please select any amount from below options: \n ",
                choices: [1000, 2000, 3000, 4000, 5000, 10000, "Other Amount"]
            },
        ])

        if (immediateFigure.Amount === "Other Amount") {
            let otherAmount = await inquirer.prompt([{
                name: 'CustomAmount',
                type: 'number',
                message: 'Please Enter Amount: '
            }])

            if (otherAmount.CustomAmount > userBalance) {
                console.log("Insuificent Balance! ")
                await cashWithDraw()
            }
            else {
                withDrawingAmount = otherAmount.CustomAmount;
                userBalance = userBalance - withDrawingAmount
                console.log(`
    ==========================================================
        ${withDrawingAmount} has WithDrawed, your current balance is ${userBalance}
    ==========================================================
                `)
            }

        }
        else {
            withDrawingAmount = immediateFigure.Amount
            userBalance = userBalance - withDrawingAmount
            console.log(`
    ==========================================================
        ${withDrawingAmount} has WithDrawed, your current balance is ${userBalance}
    ==========================================================
            `)
        }
    }
    else {
        console.log('Invalid PIN, Please input the right pin as per the detail section')
        await cashWithDraw()
    }
}

async function checkingAccountBalance() {

    let userAcNo = await inquirer.prompt([{
        name: 'AccountNumber',
        type: 'input',
        message: 'Enter your 16 digits Account number: '
    }])

    if (userAcNo.AccountNumber === accountNumber || userAcNo.AccountNumber === 'PK00000123456789' || userAcNo.AccountNumber === 'pk00000123456789') {
        const spinner = createSpinner(chalk.yellow('Please wait ATM is Checking Your Account Balance... ')).start()
        await sleep(3000)
        spinner.success()
        console.log(`\nYour Current Balance ${chalk.cyan(`${userBalance}`)}`)
    }
    else {
        console.log(chalk.red("Invalid Account Number, Please input valid account number from your details"))
        await checkingAccountBalance()
    }

}

async function cashDepositer() {
    let userAcPin = await inquirer.prompt([{
        name: 'AccountPin',
        type: 'number',
        message: 'Enter your 4 digit pin code: '
    }])
    if (userAcPin.AccountPin === userPin) {
        console.log("yes successfully valid person")
        const depositingFigure = await inquirer.prompt([
            {
                type: "list",
                name: "Amount",
                message: "Please select any amount for depositing from below options: \n ",
                choices: [1000, 2000, 3000, 4000, 5000, 10000, "Other Amount"]
            },
        ])

        if (depositingFigure.Amount === "Other Amount") {
            let otherAmount = await inquirer.prompt([{
                name: 'CustomAmount',
                type: 'number',
                message: 'Please Enter Amount: '
            }])

            userBalance = userBalance + otherAmount.CustomAmount;
            console.log(`
    =================================================================================
        ${otherAmount.CustomAmount} has been deposited in your account, Your current balance is ${userBalance}
    =================================================================================
                `)
        }
        else {
            userBalance = userBalance + depositingFigure.Amount;
            console.log(`
    =================================================================================
        ${depositingFigure.Amount} has been deposited in your account, Your current balance is ${userBalance}
    =================================================================================
                `)

        }

    }
    else {
        console.log('Invalid PIN, Please input the right pin as per the detail section')
        await cashDepositer()
    }

}



async function pinUpdation() {
    let previousPin = await inquirer.prompt([{
        name: 'PreviousPin',
        type: 'number',
        message: 'Enter your 4 digit pin code: '
    }])
    if (previousPin.PreviousPin === userPin) {
        let latestPin = await inquirer.prompt([{
            name: 'NewPin',
            type: 'number',
            message: 'Enter new pin for updation: '
        }])
        userPin = latestPin.NewPin
    } 
    else {
        console.log("Invalid Pin")
        await pinUpdation()
    }
}

// LOADING:

async function loading() {
    console.log(chalk.magenta("\nAtm is Loading Please wait...\n"))
}

// OPERATIONS: 

const atmFunctions = async () => {
    const fuctionality = await inquirer.prompt([
        {
            type: "list",
            name: "Functions",
            message: "Which Function you want to perfrom?\n ",
            choices: ['Cash Withdraw', 'Cash Deposit', 'Balance Inquiry', 'Updating Pin']
        },
    ])
    // console.log(fuctionality)
    if (fuctionality.Functions === "Cash Withdraw") {
        await repeater(cashWithDraw)
    }
    else if (fuctionality.Functions === "Balance Inquiry") {
        await repeater(checkingAccountBalance)
    }
    else if (fuctionality.Functions === "Cash Deposit") {
        await repeater(cashDepositer)
    }
    // else if (fuctionality.Functions === "Updating Pin") {
    //     await repeater(pinUpdation)
    // }
    else {
        await repeater(pinUpdation)

    }
}

// CALLBACKS:

const repeater = async (callback: Function) => {
    await callback()
    var repeaterAsker = await inquirer.prompt([
        {
            name: 'Again',
            type: 'input',
            message: 'Would you like to use ATM again Y or N? '
        }
    ])
    if (repeaterAsker.Again === "Y" || repeaterAsker.Again === "y" || repeaterAsker.Again === "YES" || repeaterAsker === "yes") {
        await atmFunctions();
    }

}









// const againRunner = async () => {
//     await checkingAccountBalance()

//     var againChance = await inquirer.prompt([
//         {
//             name: 'Again',
//             type: 'input',
//             message: 'Would you like to use ATM again Y or N? '
//         }
//     ])
//     if (againChance.Again === "Y" || againChance.Again === "y" || againChance.Again === "YES" || againChance === "yes") {
//         await atmFunctions();
//     }

// }
// SOMES CALLBACKS WORKS>>





































// await sleep(3000);
// await nameIndc();
await login();
// await sleep(5000);
// await loading();
// await sleep(3000);
await atmFunctions();