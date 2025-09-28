//dom - document object model -- it represents a document with tree like structure. it allow us to manupulatee/change webpage content (HTML element)

//select by id -- select only one element
let box = document.getElementById("box");
// box.style.background = "green";

//select by class-name -- select all the class of that name
let btns = document.getElementsByClassName("btn")
for(let btn of btns){
    btn.style.background = "darkBlue";
}

//select by tag-name -- select all the tags -- 
let input = document.getElementsByTagName("input")[0];
console.log(input.value);

let form = document.getElementsByTagName("form")[0];

// querry selector -- it select only first elemwnt of the queery like class or tag or id etc

let btn1 = document.querySelector("button"); // it select first btn tag
let msg = document.querySelector("#message");
msg.innerText; // voh text jo browser vr visible hota hian
msg.innerHTML; // pura ka pura html element hi show hota hain
msg.textContent; // hamare code ke andar ka text show hota hain

// query selector all- it select all  of the querry like class , tags or ids etc.
let btnAll = document.querySelectorAll(".btn"); // it select all .btn classes html element
let btnText = document.getElementById("changeTextBtn");
let btnColor = document.querySelector("#changeColorBtn");
let hideShowBtn = document.getElementById("hideShowBtn");

btnText.addEventListener("click",()=>{
   setTimeout(() => {
    msg.innerText = "Text Changed"
   }, 3000);
})
btnColor.addEventListener("click",()=>{
    box.style.backgroundColor=`rgb(${Math.floor(Math.random()*255-0)+0},${Math.floor(Math.random()*255-0)+0},${Math.floor(Math.random()*255-0)+0})`
})
hideShowBtn.addEventListener(("click"),()=>{
    if(box.style.display=="none"){
        box.style.display="block";
    }
    else if(box.style.display=="block"){
        box.style.display="none";
    }
    else{
        box.style.display="none"
    }
})

 

let imgBtn = document.querySelector("#hideShowImg");

imgBtn.addEventListener("click",()=>{
    if(box.innerHTML=="")
        box.innerHTML =  '<img src="https://plus.unsplash.com/premium_photo-1694819488591-a43907d1c5cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8fHww" width="100%" height="100%" />'
        else
        box.innerHTML = ''
    
})


//get Attributes-- attributes ko lena . pr yeh sirf js elements ke upr kam krta hain
//set Attributes -- attributes ko dena  .pr yeh sirf js elements ke upr kam krta hain . pr yeh pehle wale sare attributes remove kr dega 
let title = document.querySelector("#title")
title.setAttribute("class","color-red") // attribute set kr diya class = color-red


//class-list -- yeh hame btata hai ki is element ko kon kon si class di gyi hain
let testingBox = document.querySelector("#testing");
console.log(testing.classList);

//classList.add -- isse ham is element pe classes add kr sakte hain . 
testingBox.classList.add('border-black','color-red')
document.body.classList.add("border-black")

//classList.remove -- isse ham is element pe classes remove kr sakte hain.
testingBox.classList.remove("color-red")    

// classList.contains -- isse ham chq kr sakte hain ki is element ko yeh class di gyi hai ya nai
console.log( testingBox.classList.contains("color-red")); // return false bcz yeh class nhi hain testing box element ke pass

testingBox.nextElementSibling.style.color="green"
//classList.toggle -- isse ham classes toggle kr sate hain . agr element ke pass class hai to class remove ho jayegi varna add ho jayegi 
document.body.classList.toggle("dark-mode")
document.body.classList.toggle("dark-mode")


// createElement -- isse ham element create kr sakte hain . pr yeh hamare code me abhi append nhi hoga
let newH3 = document.createElement("h3") //yeh bs create huya hai pr body ke andar append nhi huya

//appendChild -- isse ham create kiye huya eleemnt ko append kr sakte hain 
document.body.appendChild(newH3);
newH3.innerText = "hllo"

//append -- issme ham koi text bhi add krwa sakte hai last me
newH3.append("yeh append huya hain")

//prepend -- issme ham koi text bhi add krwa sakte hai starting me
newH3.prepend("start here")

//remove --isse ham remove kr sakte hai cild ko
document.body.removeChild(newH3)
let heading2 = document.querySelector("#heading-2");
heading2.innerText = ""
input.addEventListener("input",(e)=>{
    console.log(e.data);
    
    if(e.data == null){
        
        
    }
    else if(e.data == ""){
        heading2.innerText += " ";

    }
    else{
        heading2.innerText += e.data;
    }

})

//onclick se hm bs ek element pe ek hi same event ko run kr sakte hain
btn1.onclick = ()=>{console.log('hello');console.log('hi');}


//addeventListener se ham jitne marzi same event ke upr function perform kr sakte hain
btn1.addEventListener("click",()=>{
    console.log("heloo");
    console.log('hi');
})
