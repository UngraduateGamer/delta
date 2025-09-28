async function greet() {
    // throw "404! page not found";
    return "hello";// return promise
}

// greet()
// .then((data)=>{
//     console.log(data);
//     console.log("hlo");
    
// })
// .catch((er)=>{
//     console.log(er);
    
// })

function getNum(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{

            let n = Math.floor(Math.random()*10)+1
            console.log("success");
            
            res("hi")
        },1000)
    })
    
}
async function demo() {
    await getNum();
    await getNum()
}

// demo();

let h1 = document.querySelector("h1");
h1.style.textTransform = 'Capitalize'
function colorChange(color,delay){
    return new Promise((res,rej)=>{
        
        setTimeout(()=>{
            console.log("color changed"+color);
            h1.style.color = color;
            res("color changed");

        },delay);
        
    })
}

async function setColor(){
    await colorChange("red",1000);
    await colorChange("green",1000);
    await colorChange("blue",1000);
    await colorChange("maroon",1000);
}

setColor()