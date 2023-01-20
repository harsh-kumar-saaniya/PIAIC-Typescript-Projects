import inquirer from 'inquirer';
class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    askQuestion(answer) {
        if (answer == 1) {
            this.personality = "Extravert";
        }
        else {
            this.personality = "Introvert";
        }
    }
    // this method returns the value of personality
    getPersonality() {
        return this.personality;
    }
}
class Program {
    input;
    async valueGetter() {
        let personalityValue = await inquirer.prompt([{
                name: 'value',
                type: 'number',
                message: 'Type 1 if you like to talk to others or Type 2 if you would rather keep yourself'
            }]);
        this.input = personalityValue.value;
        let myPerson = new Person();
        myPerson.askQuestion(this.input);
        console.log(`You are ${myPerson.getPersonality()}`);
    }
}
let person = new Person();
let program = new Program();
program.valueGetter();
