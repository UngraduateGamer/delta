// constructor -- start with capital letter and do not return any value
function Person(name,age){
    this.name = name;
    this.age = age;
    Person.prototype.talk = function (){
        console.log(`hello my name is ${this.name}`);
        
    }
}

let p1 = new Person('rahul',19);
let p2 = new Person('jasraj',19);
console.log(p1,p2);
p1.talk()
