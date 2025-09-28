let num1 = -12;
let num2 = 12;

console.log(Math.abs(num1)); // remove the -ve sign 

// Math.pow -- means a raise to power b

const a = 2;
const b= 5;
console.log(Math.pow(a,b)); // 2*2*2*2*2
console.log(2**5);


// Math.floor -- return the nearest lowest integer

const n = 15.01;
console.log(Math.floor(n));

// Math.ceil -- return the nearest highest integer
console.log(Math.ceil(n));

// Math.random -- return the random value of 0<1 only floating values
console.log(Math.random());


// int values randomly (1-10)

let num = Math.random()*10;
num = Math.ceil(num)
console.log(num);
console.log(num);
