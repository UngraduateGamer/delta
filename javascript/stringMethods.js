// string merthods
// stringName.method() 

// trim method -- it is used to remove whitespace to bothends
let msg = "           msg     here            ";
msg = msg.trim()
// console.log(msg.trim());

// toUpperCase() -- it is used to all character changes to uppercase
msg = msg .toUpperCase()
// toLowerCase() -- it is used to all character changes to lowercase
msg = msg .toLowerCase()
console.log(msg);

// arguments
console.log( msg.indexOf("g"));

// slice -- it is used to cut my string using arguments. (returns a part of new string as a orignal string)
let sentence = "Bakwas Duniya Hai";
sentence = sentence.slice(5); // 5 char ke bad vala sara string return hoga

//replace -- it is used to replace the string  with argumented string and return  the string
sentence = sentence.replace("Bakwas","Vadia");
console.log(sentence);

//repeat -- it is used to repeat the entire string in input times 
let name = "Rahul kuumar ";
let group = name.repeat(5);
console.log(group);
