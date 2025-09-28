let btn = document.querySelector("#btn");
let heading = document.querySelector("h1");
btn.addEventListener("click",()=>{
    let red = Math.floor(Math.random()*255-0)+0;
    let green = Math.floor(Math.random()*255-0)+0;
    let blue = Math.floor(Math.random()*255-0)+0;
    heading.innerText = `rgb(${red},${green},${blue})`;
    div.style.backgroundColor =    `rgb(${red},${green},${blue})`;
    
})

let div  = document.querySelector("div");