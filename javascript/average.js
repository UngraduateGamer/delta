let arr = [12,15,24,21,15];

// square of the array
let square = arr.map((element)=>{return element*element})

// sum of the array element
let sum = arr.reduce((first,next)=>{return next+first});

// average of the array element
let length = arr.length;
let average = sum/length;
console.log(average);
