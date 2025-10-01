class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    talk(){
        console.log(`hello my name is ${this.name}`);
        
    }
}

let p1 = new Person("rahul",19)// it is used for creating empty object
let p2 = new Person("prince",15);
console.log(p1,p2);
p1.talk()