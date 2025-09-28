// setInterval -- yeh code bhi kush time bad chalega pr yeh code bar bar chlta rehega kush time bad jb tk hm clear intervsalnai kr lete

console.log("1");
console.log("2");
console.log("3");
let id = setInterval((
)=>{console.log("4");},2000) // yeh code har 2 sec bad execute hoga 
setTimeout(()=>{
clearInterval(id)
},5000)
console.log("5");
console.log("6");
