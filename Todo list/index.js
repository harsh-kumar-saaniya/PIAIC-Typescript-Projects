import inquirer from 'inquirer';
console.log("everything is working fine");
const operations = async () => {
    let gettingOpertion = await inquirer.prompt([{
            name: 'Useroperation',
            type: 'list',
            message: 'Which operation you want to perform',
            choices: ['1. Create Todo', '2. Display Todo', '3. Mark todo as completed', '4. Updating Todo', '5. Deleting Todo']
        }]);
    console.log(gettingOpertion);
    if (gettingOpertion.Useroperation === '1. Create Todo') {
        console.log("Create todo");
        await createTodo();
    }
    else if (gettingOpertion.Useroperation === '2. Display Todo') {
        console.log("Display to do");
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
let todoList = [];
// let arr: string[] = []
async function createTodo() {
    let todo = await inquirer.prompt([{
            name: 'Todo',
            type: 'input',
            messsage: 'Write your to do: ',
        }]);
    todoList.push(todo.Todo);
    // console.log(typeof todo.Todo)
    // console.log(first)
}
// todoList.push("working fine")
console.log(todoList);
