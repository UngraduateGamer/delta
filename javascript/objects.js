// object -- it is collection of key value pairs

const student = {
    name:"Rahul",
    classs:"BCA",
    skills:"HTML,CSS,JS",
    role:"Web Developer",
    no:9
}
// student = {} -- not possible bcz its CONSTANT
student.name="Prince";
console.log(typeof student.no);

//delete is used to delete the key vlaue pairs
delete student.no;
console.log(student);

console.log(student.name);
console.log(student['name']);



let obj = {
    WebDeveloper:{name:"rahul",role:"Frontent Developer"},
    AppDeveloper:{name:"Prince",skills:"Java"}
}
console.log(obj.WebDeveloper.name);


const classInfo = [
    {
        name:"Rahul",
        role:"Web Developer"
    },
    
    {
        name:"Prince",
        role:"Java Developer"
    },

]

console.log(classInfo[0].name);
