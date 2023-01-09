import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';
let todoList = ['first', 'second', 'third', 'fourth', 'fivth', 'six', 'seven', 'eight', 'nine', 'ten'];
let completedTodos = [];
const sleep = (v) => new Promise(r => setTimeout(r, v));
const spinnerRunner = async (spinnerValue) => {
    const spinner = createSpinner(chalk.yellow(spinnerValue)).start();
    await sleep(3000);
    spinner.success();
};
async function appDiclarabler() {
    figlet('TODO APP', (err, data) => {
        console.log(chalk.hex('FFFF00').bold(`${data ? data : err}`));
    });
}
async function developerName() {
    let text = chalkAnimation.karaoke(`
    +-+-+-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+-+
    |D|E|V|E|L|O|P|E|D| |B|Y| |H|A|R|I|S|H|
    +-+-+-+-+-+-+-+-+-+ +-+-+ +-+-+-+-+-+-+
        \n`);
    await sleep(4000);
    text.stop();
}
async function createTodo() {
    await spinnerRunner('Please Wait...');
    let todosItem = await inquirer.prompt([{
            name: 'Todo',
            type: 'input',
            messsage: 'Write your to do which you watn to write: ',
        }]);
    todoList.push(todosItem.Todo);
}
const againStarter = async () => {
    do {
        await createTodo();
        var again = await inquirer.prompt([{
                name: 'AgainRunner',
                type: 'input',
                message: chalk.hex('FFFF00')('Do you want to add more todo y or n')
            }]);
        if (again.AgainRunner === 'no' || again.AgainRunner === 'n' || again.AgainRunner === 'NO' || again.AgainRunner === 'N') {
            await spinnerRunner('Operations is Loading\n');
            await operations();
        }
        else if (again.AgainRunner !== 'no' || again.AgainRunner !== 'n' || again.AgainRunner !== 'NO' || again.AgainRunner !== 'N') {
            console.log(chalk.hex('FF8A65')('Write todo again\n')); // need to work here in this uX work
            await againStarter();
        }
    } while (again.AgainRunner === 'y' || again.AgainRunner === 'yes' || again.AgainRunner === 'Y' || again.AgainRunner === 'YES');
};
const todoDisplayer = async () => {
    await spinnerRunner("Please wait we are Displaying your todo List...\n");
    console.log(chalk.hex('FFFF00')('Todo List: \n'));
    todoList.forEach(e => {
        console.log(chalk.hex('FFFF00')(`${`* ${e}`}`));
    });
};
const todoUpdater = async () => {
    let updatedTodoValue;
    let todoForUpdate = await inquirer.prompt([{
            name: 'Updations',
            type: 'list',
            message: chalk.hex('FFFF00')('Which todo you want to update? '),
            choices: todoList
        },
        {
            name: 'UpdatedTodo',
            type: 'input',
            message: 'Write your updated todo: '
        }
    ]);
    updatedTodoValue = todoForUpdate.UpdatedTodo;
    for (let i = 0; i < todoList.length; i++) {
        if (todoForUpdate.Updations === todoList[i]) {
            todoList[i] = updatedTodoValue;
        }
    }
    console.log('value after forloop ', todoList);
};
const todoRemover = async () => {
    let deletingTodoValue;
    let todoForDeleted = await inquirer.prompt([{
            name: 'Deleting',
            type: 'list',
            message: 'Which todo you want to Remove? ',
            choices: todoList
        }]);
    deletingTodoValue = todoForDeleted.Deleting;
    for (let i = 0; i < todoList.length; i++) {
        if (todoForDeleted.Deleting === todoList[i]) {
            let index = todoList.indexOf(todoList[i]);
            todoList.splice(index, 1);
        }
    }
    console.log(todoList);
};
const complectionMarking = async () => {
    let markingForCompleted = await inquirer.prompt([{
            name: 'Completing',
            type: 'list',
            message: 'Which todo you want to Mark as Completed? ',
            choices: todoList
        }]);
    for (let i = 0; i < todoList.length; i++) {
        if (markingForCompleted.Completing === todoList[i]) {
            completedTodos.push(todoList[i]);
            let index = todoList.indexOf(todoList[i]);
            todoList.splice(index, 1);
        }
    }
    console.log(todoList);
};
const completedTodosList = async () => {
    console.log("This all todos is completed!");
    completedTodos.forEach(e => {
        console.log(`* ${e}`);
    });
};
const operations = async () => {
    let gettingOpertion = await inquirer.prompt([{
            name: 'Useroperation',
            type: 'list',
            message: chalk.hex('FFFF00')('You can perform the following task with This Todo App: \n'),
            choices: ['1. Create Todo', '2. Display Todo', '3. Completed Task', '4. Mark todo as completed', '5. Updating Todo', '6. Deleting Todo']
        }]);
    // console.log(gettingOpertion)
    if (gettingOpertion.Useroperation === '1. Create Todo') {
        await againStarter();
    }
    else if (gettingOpertion.Useroperation === '2. Display Todo') {
        await reStarter(todoDisplayer);
    }
    else if (gettingOpertion.Useroperation === '3. Completed Task') {
        await completedTodosList();
    }
    else if (gettingOpertion.Useroperation === '4. Mark todo as completed') {
        await complectionMarking();
    }
    else if (gettingOpertion.Useroperation === '5. Updating Todo') {
        await todoUpdater();
    }
    else if (gettingOpertion.Useroperation === '6. Deleting Todo') {
        await todoRemover();
    }
};
async function reStarter(callback) {
    do {
        await callback();
        var ans = await inquirer.prompt([{
                name: 'Select',
                type: 'list',
                choices: ['Back to Options', 'Exit']
            }]);
        if (ans.Select === "Back to Options") {
            await operations();
        }
    } while (ans.Select === "Back to Options");
}
await appDiclarabler();
await sleep(2000);
await developerName();
await sleep(2000);
await operations();
