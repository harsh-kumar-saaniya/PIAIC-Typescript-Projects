// GUESSING NUMBER GAME
import inquirer from 'inquirer';

// GENERATING THE RANDOM NUMBER

// let randNum: number = Math.floor(Math.random() * 10);

// GETTING THE NUMBER FROM USER
var winner: boolean;
var round = 0;
const valueGetter = async () => {
    let randNum: number = Math.floor(Math.random() * 10);
    // console.log("value by system", randNum)

    let userInput = await inquirer.prompt([{
        name: "userInput",
        type: 'number',
        message: "Guess any number between 0 to 9: "
    }])


    if (randNum === userInput.userInput) {
        winner = true;
        console.log("Wow, you guessed the right number...!!!")
    } else {
        winner = false;
        console.log("Opps... You guessed the wrong number try agin!")
    }

}

// MAKING THREE ROUNDS

const againStarter = async () => {
    do {
        await valueGetter()
        round++;
        var again = await inquirer.prompt([
            {
                name: "nextLevel",
                type: "input",
                message: round === 3 ? 'Congratulation you win all the round best wishes' : (winner === true ? `You won the ${round} round, Are you ready for the next round y or n?` : "You lost the game, Best Luck!!!")
            }
        ])

    }
    while (winner === true && round < 3 && again.nextLevel == 'y' || again.nextLevel == "Y" || again.nextLevel == 'yes' || again.nextLevel == "YES");
}
// WINNING AND LOSE STATEMENT

await againStarter()
// NEED TO ADD THE FURTHER FUNCTIONALITY FOR IMPROVING THE CODE


// const againStarter = async () => {
//     await valueGetter()
//     let round = 1;

//     if (winner === true) {
//         var again = await inquirer.prompt([
//             {
//                 name: "nextLevel",
//                 type: "input",
//                 message: "You won the first round, Are you ready for the second round y or n "
//             }
//         ])
//         while (again.nextLevel == 'y' || again.nextLevel == 'yes' || again.nextLevel == 'Y' || again.nextLevel == 'YES' && winner === true && round === 2) {
//             await valueGetter()
//             round++;
//         }
//     }
//     // else {
//     //     console.log("You lost!!!")
//     // }
// }

// await againStarter()