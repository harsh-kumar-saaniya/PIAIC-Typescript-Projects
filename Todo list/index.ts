import inquirer from 'inquirer';

let todoList: string[] = ['first', 'second', 'third', 'fourth', 'fivth', 'six', 'seven', 'eight', 'nine', 'ten']

async function createTodo() {
    let todosItem = await inquirer.prompt([{
        name: 'Todo',
        type: 'input',
        messsage: 'Write your to do: ',
    }])
    todoList.push(todosItem.Todo)
}


const againStarter = async () => {
    do {
        await createTodo()
        var again = await inquirer.prompt([{
            name: 'AgainRunner',
            type: 'input',
            message: 'Do you want to add more todo y or n'
        }])
        if (again.AgainRunner === 'no' || again.AgainRunner === 'n' || again.AgainRunner === 'NO' || again.AgainRunner === 'N') {
            await operations()
        }
    }
    while (again.AgainRunner === 'y' || again.AgainRunner === 'yes' || again.AgainRunner === 'Y' || again.AgainRunner === 'YES')
}

const todoDisplayer = async () => {
    console.log('Todo List: \n')
    todoList.forEach(e => {
        console.log(`* ${e}`)
    });
}

const todoUpdater = async () => {
    let updatedTodoValue: string;
    let todoForUpdate = await inquirer.prompt([{
        name: 'Updations',
        type: 'list',
        message: 'Which todo you want to update? ',
        choices: todoList
    },
    {
        name: 'UpdatedTodo',
        type: 'input',
        message: 'Write your updated todo: '
    }
    ])
    updatedTodoValue = todoForUpdate.UpdatedTodo;

    for (let i = 0; i < todoList.length; i++) {
        if (todoForUpdate.Updations === todoList[i]) {
            todoList[i] = updatedTodoValue;
        }
    }
    console.log('value after forloop ', todoList)
}

const todoRemover = async () => {
    let deletingTodoValue: string;
    let todoForDeleted = await inquirer.prompt([{
        name: 'Deleting',
        type: 'list',
        message: 'Which todo you want to Remove? ',
        choices: todoList
    }])
    deletingTodoValue = todoForDeleted.Deleting;
    for (let i = 0; i < todoList.length; i++) {
        if (todoForDeleted.Deleting === todoList[i]) {
            let index = todoList.indexOf(todoList[i])
            todoList.splice(index, 1)
        }
    }
    console.log(todoList)
}


const operations = async () => {

    let gettingOpertion = await inquirer.prompt([{
        name: 'Useroperation',
        type: 'list',
        message: 'Which operation you want to perform',
        choices: ['1. Create Todo', '2. Display Todo', '3. Mark todo as completed', '4. Updating Todo', '5. Deleting Todo']
    }])
    // console.log(gettingOpertion)

    if (gettingOpertion.Useroperation === '1. Create Todo') {
        await againStarter()

    }
    else if (gettingOpertion.Useroperation === '2. Display Todo') {
        await todoDisplayer()
    }
    else if (gettingOpertion.Useroperation === '3. Mark todo as completed') {
        console.log("mark to do as completed ")
    }
    else if (gettingOpertion.Useroperation === '4. Updating Todo') {
        console.log("updating todo")
        await todoUpdater()
    }
    else if (gettingOpertion.Useroperation === '5. Deleting Todo') {
        await todoRemover()
    }

}

await operations();


