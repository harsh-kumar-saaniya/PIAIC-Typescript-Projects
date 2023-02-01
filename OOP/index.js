#! /usr/bin/env node
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
        else if (answer == 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "Still Mystery";
        }
    }
    getPersonality() {
        return this.personality;
    }
}
class Program {
    input;
    name;
    async valueGetter() {
        let personalityValue = await inquirer.prompt([{
                name: 'value',
                type: 'number',
                message: 'Type 1 if you like to talk to others or Type 2 if you would rather keep yourself: '
            }]);
        this.input = personalityValue.value;
        let myPerson = new Person();
        myPerson.askQuestion(this.input);
        console.log(`You are ${myPerson.getPersonality()}`);
        let personName = await inquirer.prompt([{
                name: 'name',
                type: 'input',
                message: 'What is your name? '
            }]);
        this.name = personName.name;
        let myStudent = new Student();
        myStudent.nameSetter = this.name;
        console.log(`Your name is ${this.name} and your personality is ${myStudent.getPersonality()}`);
    }
}
class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = '';
    }
    get nameGetter() {
        return this._name;
    }
    set nameSetter(v) {
        this._name = v;
    }
}
let program = new Program();
program.valueGetter();
