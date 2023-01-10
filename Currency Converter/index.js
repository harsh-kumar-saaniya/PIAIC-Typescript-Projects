import inquirer from 'inquirer';
const UsdToPkr = 228.43;
const PkrToUsd = 0.0044;
const EuToPkr = 239.85;
const PkrToEU = 0.0042;
const EutoUsd = 1.05;
const UsdToEu = 0.95;
var repeat = false;
const converter = async () => {
    do {
        let value = await inquirer.prompt([{
                name: "currencyFrom",
                type: "list",
                choices: ['USD', 'PKR', 'EU'],
                message: 'Select From Which currency you want to convert? '
            },
            {
                name: "currencyTo",
                type: "list",
                choices: ['USD', 'PKR', 'EU'],
                message: 'Select to Which currency you want to convert? '
            },
            {
                name: "Amount",
                type: "number",
                message: 'Please enter Amount: '
            }]);
        console.log(value.Amount);
        switch (value.currencyFrom) {
            case 'USD':
                if (value.currencyTo === 'PKR') {
                    let amount = value.Amount * UsdToPkr;
                    console.log(amount);
                }
                else if (value.currencyTo === 'EU') {
                    let amount = value.Amount * UsdToEu;
                    console.log(amount);
                }
                else {
                    console.log(value.Amount);
                }
                break;
            case 'PKR':
                if (value.currencyTo === 'USD') {
                    let amount = value.Amount * PkrToUsd;
                    console.log(amount);
                }
                else if (value.currencyTo === 'EU') {
                    let amount = value.Amount * PkrToEU;
                    console.log(amount);
                }
                else {
                    console.log(value.Amount);
                }
                break;
            case 'EU':
                if (value.currencyTo === 'USD') {
                    let amount = value.Amount * EutoUsd;
                    console.log(amount);
                }
                else if (value.currencyTo === 'PKR') {
                    let amount = value.Amount * EuToPkr;
                    console.log(amount);
                }
                else {
                    console.log(value.Amount);
                }
                break;
        }
        repeat = await Repeat();
    } while (repeat == true);
};
await converter();
async function Repeat() {
    let again = await inquirer.prompt([{
            name: 'restart',
            type: 'list',
            choices: ["y", "n"],
            message: "Do you want to repeat the program? "
        }]);
    return again.restart === 'y' ? true : false;
}
