#! /usr/bin/env node
"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Student extends Person {
    constructor(name, age, rollNumber) {
        super(name, age);
        this.courses = [];
        this.rollNumber = rollNumber;
    }
    registerForCourse(course) {
        this.courses.push(course);
    }
}
class Instructor extends Person {
    constructor(name, age, salary) {
        super(name, age);
        this.courses = [];
        this.salary = salary;
    }
    assigningCourses(course) {
        this.courses.push(course);
    }
}
class Course {
    constructor(id, name) {
        this.students = [];
        this.id = id;
        this.name = name;
    }
    addStudent(student) {
        this.students.push(student);
        student.registerForCourse(this);
    }
    setInstructor(insturctor) {
        this.insturctor = insturctor;
        insturctor.assigningCourses(this);
    }
}
class Department {
    constructor(name) {
        this.courses = [];
        this.name = name;
    }
    addCourse(course) {
        this.courses.push(course);
    }
}
const student1 = new Student("harish", 19, "student1");
const student2 = new Student("harsh", 19, "student2");
console.log(student2);
const instructor1 = new Instructor("Zia", 19, 20000);
const instructor2 = new Instructor("Imran", 19, 20000);
console.log(instructor1);
console.log(instructor2);
const course1 = new Course("course1", "Metaverse");
const course2 = new Course("course2", "Blockchain");
course1.addStudent(student1);
course1.addStudent(student2);
console.log(course1);
console.log(course2);
course1.setInstructor(instructor1);
const department1 = new Department("Computer Science");
department1.addCourse(course1);
department1.addCourse(course2);
console.log(department1);
