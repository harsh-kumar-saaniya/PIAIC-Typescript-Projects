#! /usr/bin/env node

import inquirer from 'inquirer';


class Person {
    private personality: string

    public constructor() {
        this.personality = "Mystery"
    }

    askQuestion(answer: number): void {
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
        return this.personality
    }
}


class Program {

    input!: number;
    name!: string;

    async valueGetter() {
        let personalityValue = await inquirer.prompt([{
            name: 'value',
            type: 'number',
            message: 'Type 1 if you like to talk to others or Type 2 if you would rather keep yourself: '
        }])

        this.input = personalityValue.value;

        let myPerson = new Person();
        myPerson.askQuestion(this.input);
        console.log(`You are ${myPerson.getPersonality()}`);

        let personName = await inquirer.prompt([{
            name: 'name',
            type: 'input',
            message: 'What is your name? '
        }])

        this.name = personName.name;

        let myStudent = new Student();
        myStudent.nameSetter = this.name
        console.log(`Your name is ${this.name} and your personality is ${myStudent.getPersonality()}`)
    }


}

class Student extends Person {
    private _name: string;

    constructor() {
        super()
        this._name = '';
    }

    public get nameGetter(): string {
        return this._name
    }

    public set nameSetter(v: string) {
        this._name = v;
    }



}



let program = new Program()
program.valueGetter()