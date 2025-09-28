//set timeout -- isme ham jo function pass krega vo kush time bad run hoga jitna time hamne niche diya hoga pr yeh code ko intrept nhi krega 
console.log("I'm first");
console.log("I'm second");
setTimeout(()=>{
    console.log("I'm third"); // 5 sec badd run hoga yeh
},5000)
console.log("I'm last");

