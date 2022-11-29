// GUESSING NUMBER GAME
import inquirer from 'inquirer';

// GENERATING THE RANDOM NUMBER

let randNum: number = Math.floor(Math.random() * 10);
console.log("value by system", randNum) 


// GETTING THE NUMBER FROM USER

const valueGetter = async () => {
    let userInput = await inquirer.prompt([{
        name: "userInput",
        type: 'number',
        message: "Please Enter any number: "
    }])

    if (randNum === userInput.userInput) {
        console.log("Wow, you guessed the right number...!!!")
    } else {
        console.log("Opps... You guessed the wrong number try agin!")
    }
}
valueGetter()

// WINNING AND LOSE STATEMENT

// NEED TO ADD THE FURTHER FUNCTIONALITY FOR IMPROVING THE CODE

