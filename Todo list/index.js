import inquirer from 'inquirer';
let todoList = [];
async function createTodo() {
    let todosItem = await inquirer.prompt([{
            name: 'Todo',
            type: 'input',
            messsage: 'Write your to do: ',
        }]);
    todoList.push(todosItem.Todo);
}
const againStarter = async () => {
    do {
        await createTodo();
        var again = await inquirer.prompt([{
                name: 'AgainRunner',
                type: 'input',
                message: 'Do you want to add more todo y or n'
            }]);
        if (again.AgainRunner === 'no' || again.AgainRunner === 'n' || again.AgainRunner === 'NO' || again.AgainRunner === 'N') {
            await operations();
        }
    } while (again.AgainRunner === 'y' || again.AgainRunner === 'yes' || again.AgainRunner === 'Y' || again.AgainRunner === 'YES');
};
const todoDisplayer = async () => {
    // for (let i = 0; i < todoList.length; i++) {
    //     console.log(`${i} ${todoList[i]}`)
    // }
    todoList.forEach(element => {
        console.log(`* ${element}`);
    });
};
const operations = async () => {
    let gettingOpertion = await inquirer.prompt([{
            name: 'Useroperation',
            type: 'list',
            message: 'Which operation you want to perform',
            choices: ['1. Create Todo', '2. Display Todo', '3. Mark todo as completed', '4. Updating Todo', '5. Deleting Todo']
        }]);
    console.log(gettingOpertion);
    if (gettingOpertion.Useroperation === '1. Create Todo') {
        await againStarter();
    }
    else if (gettingOpertion.Useroperation === '2. Display Todo') {
        console.log("Display to do");
        await todoDisplayer();
    }
    else if (gettingOpertion.Useroperation === '3. Mark todo as completed') {
        console.log("mark to do as completed ");
    }
    else if (gettingOpertion.Useroperation === '4. Updating Todo') {
        console.log("updating todo");
    }
    else if (gettingOpertion.Useroperation === '5. Deleting Todo') {
        console.log("deleting todo ");
    }
};
await operations();
