// GUESSING NUMBER GAME
import inquirer from 'inquirer';
// GENERATING THE RANDOME NUMBER
let randNum = Math.floor(Math.random() * 10);
console.log("value by system", randNum);
// GETTING THE NUMBER FROM USER
const valueGetter = async () => {
    let userInput = await inquirer.prompt([{
            name: "userInput",
            type: 'number',
            message: "Please Enter any number: "
        }]);
    console.log(userInput.userInput);
    if (randNum === userInput.userInput) {
        console.log("Wow, you guessed the right number...!!!");
    }
    else {
        console.log("Opps... You guessed the wrong number try agin!");
    }
};
valueGetter();
// CHECKING THE RANDOM NUMBER WITH THE USER INPUTTED NUMBER
// WINNING AND LOSE STATEMENT
