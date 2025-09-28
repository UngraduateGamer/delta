let student =["rahul","sahil","jasraj","nikhil","murli","amrit","b",1,25,89,8,9,56,55,5,4];
console.log(student[0]);

// arrays are mutuable and string are non immutable
// mutuable means change hona 


// array methods
// push -- it means add the element in the last postion of the array 
let arr = ["virat kohli","rohit sharma","hardik pandya"];
arr.push("chris gayle");

// pop -- it means remove the last element in the array
arr.pop();

// unshift -- adding the element in the staring of the array
console.log(arr.unshift("ms dhoni")); //return the index of the element

//shift -- removing the first element in the array
arr.shift() //  remove and return the first element 
console.log(arr);


let months = ['jan','feb','march','april'];
months.shift();
months.shift();
months.unshift("july")
months.unshift("june")
console.log(months);


// indexOf - return the index of the element

console.log(
    months.indexOf('march')
);


// includes - return true if value find otherwise not
console.log(months.includes('june'));

//concat -- merge 2 arrays and returns it
let combine =
months.concat(arr);

//reverse -- reverse the entire array 
combine.reverse()
console.log(combine);

// slice -- copy the portion of an array
let arrnew = arr.slice(1)
console.log(arrnew);


// splice- remove/replace/add elements in place (chnages in org. array)
months.splice(2,2,"aug","sept");
console.log("by");

//sort - returns the sorts an array
student.sort()
console.log(student);

console.log(months);



// splice
let start = ['january','july','march','august'];
final = start.splice(0,2,"july","june");
final = start.splice(0);
console.log(final);
console.log(start);

// reversed
let languages = ['c','c++','html','javascript','python','java','c#','sql'];
languages.reverse();

console.log(languages.indexOf("javascript"));






