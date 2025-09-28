function checkPromise(){
    let num = Math.floor(Math.random()*10)+1;
    if(num<4){
        return new Promise((resolve,reject)=>{
            resolve("Ressolve ho gya hai 1st promise");
            reject("reject ho gya hai 1st promise")
        })
        .then((data)=>{
            console.log("Successfully Completed 1st Promiose");
            console.log(data);
            
        })
        .catch((data)=>{
            console.log("Error while CReating the object");
            console.log(data);
            
            
        })
    }
    else{
        return new Promise((resolve,reject)=>{
            resolve("Ressolve ho gya hai 2nd promise");
            reject("reject ho gya hai 2nd promise")
           
        })
        .then((data)=>{
            console.log("Successfully Completed 2 Promiose");
            console.log(data);
            
        })
        .catch((data)=>{
            console.log("Error while CReating the object");
            console.log(data);
            
            
        })
    }
    
}

checkPromise()

let h2 = document.querySelector("h2");

function changeColor(color,delay){
    if(color){
        return new Promise((res,rej)=>{
        setTimeout(()=>{
                h2.style.color = color
                res("Color was changed");
                // rej("Color was not changed")
            },delay)
            })
        }
}

changeColor("red",2000)
.then((data)=>{
    console.log("Red Color was applied");
    console.log(data);
    return  changeColor("green",2000)
    
})
.then((data)=>{
    console.log("Green Color was applied");
    console.log(data);
    return  changeColor("maroon",2000)
})
.then((data)=>{
    console.log("Marron Color was applied");
    console.log(data);
   
})
.catch((err)=>{
    console.log("error while creating the color");
    console.log(err);
})