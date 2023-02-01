class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    getName() {
        return this.name
    }
}

class Student extends Person {
    rollNumber: string;
    courses: Course[] = [];

    constructor(name: string, age: number, rollNumber: string) {
        super(name, age)
        this.rollNumber = rollNumber
    }

    registerForCourse(course: Course) {
        this.courses.push(course)
    }
}


class Instructor extends Person {
    private salary: number;
    courses: Course[] = [];
    constructor(name: string, age: number, salary: number) {
        super(name, age)
        this.salary = salary
    }

    assigningCourses(course: Course) {
        this.courses.push(course)
    }
}

class Course {
    id: string;
    name: string;
    students: Student[] = [];
    insturctor!: Instructor;

    constructor(id: string, name: string) {
        this.id = id
        this.name = name
    }
    addStudent(student: Student) {
        this.students.push(student)
        student.registerForCourse(this)
    }
    setInstructor(insturctor: Instructor) {
        this.insturctor = insturctor
        insturctor.assigningCourses(this)
    }
}


class Department {
    name: string;
    courses: Course[] = [];
    constructor(name: string) {
        this.name = name
    }
    addCourse(course: Course) {
        this.courses.push(course)
    }
}


const student1 = new Student("harish", 19, "student1")
const student2 = new Student("harsh", 19, "student2")

const instructor1 = new Instructor("Zia", 19, 20000)
const instructor2 = new Instructor("Imran", 19, 20000)

const course1 = new Course("course1", "Metaverse")
const course2 = new Course("course2", "Blockchain")

course1.addStudent(student1)
course1.addStudent(student2)

course1.setInstructor(instructor1)

const department1 = new Department("Computer Science")
department1.addCourse(course1)
department1.addCourse(course2)

console.log(department1)
