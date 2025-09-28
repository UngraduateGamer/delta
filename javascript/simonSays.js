let level = 0;
let gameSequence = [];
let userSequence = [];
let colors = ['red','green','blue','yellow'];
let started = false;
let h2 = document.querySelector("h2");
let btn1 = document.querySelector(".red");
document.addEventListener("keypress",()=>{
    if(started == false){
        started = true;
        levelUp();
    }
    
})
function chooseRandomButton(){
    let color = Math.floor(Math.random()*4);
    console.log(color);
    
    return color;
    
}
function buttonFlash(btn){
    btn.classList.add("flash");
    setTimeout(()=>{btn.classList.remove("flash")},250)
}
function levelUp(){
    level++;
    h2.innerText = `Level `+level;
    
    //random btn choose
    let random = chooseRandomButton();
    let randomBtn = document.querySelector(`.${colors[random]}`);
    buttonFlash(randomBtn)
    gameSequence.push(`${colors[random]}`);
    console.log(gameSequence);
    
    
}

function checkAns(idx){
    console.log(level);
    
    if(gameSequence[idx] == userSequence[idx]){
        if(userSequence.length == gameSequence.length){

            setTimeout(()=>{

                levelUp() 
            },500)
            userSequence=[];
        }
    }
    else{
        document.body.style.backgroundColor = 'red';
        setTimeout(()=>{
            document.body.style.backgroundColor = 'white';
        },150)
       
        h2.innerText ="game over. press any key to start!. your score was "+level;
      reset()
    }
    
}

function reset(){
    started = false;
    gameSequence = [];
    userSequence=[];
    level = 0;
}

function btnPress (){
    let btn = this;
    buttonFlash(btn);
    let color = this.getAttribute("id");
    userSequence.push(color)
  
    checkAns(userSequence.length-1)
    
    
}
let allBtns = document.querySelectorAll(".btn");
for(element of allBtns){
    element.addEventListener("click",btnPress)
}cal