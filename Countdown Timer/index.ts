import inquirer from 'inquirer';


let counterTimeGetter = async () => {
    let counterTime = await inquirer.prompt([{
        name: 'month',
        type: 'list',
        message: 'From Which month you want to start the countdown timer? ',
        choices: ['Jan', 'Feb', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    },
    {
        name: 'date',
        type: 'input',
        message: 'Please enter the date? ',
    },
    {
        name: 'hour',
        type: 'list',
        message: 'Please enter the hour? ',
        choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    },

    ])
}
counterTimeGetter()



// let interval = setInterval(() => {

//     let userTime = new Date("Jan 21, 2023 05:00:00").getTime();
//     let now = new Date().getTime();

//     let diff = userTime - now;

//     let days = Math.floor(diff / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((diff % (1000 * 60)) / 1000);

//     console.log(`${days}d : ${hours}hrs : ${minutes}ms : ${seconds}s`)


// }, 1000)
