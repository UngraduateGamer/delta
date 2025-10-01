class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
                console.log(`hello my name is ${this.name}`);

    }
}
class Student extends Person{
    constructor(name,age,marks){
        super(name,age);//parent constructor call
        this.marks = marks;
    }
}
class Teacher extends Person{
    constructor(name,age,subjects){
        super(name,age);//parent constructor call
        this.subjects = subjects;
    }
}

let s = new Student("rahul",19,850);
s.talk();
let t = new Teacher("jatin",19,"science");
t.talk();