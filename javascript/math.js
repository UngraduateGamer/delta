// node js -- it is javascript run time environment that is used to allow server side programming
const plus = (a,b)=>{ return (a+b)};
const minus = (a,b)=>{return a-b};
const divide = (a,b)=>{return a/b};
const name = "Rahul";
const role = 'web developer';

// exports the file 
module.exports = {plus,minus,divide,name,role};