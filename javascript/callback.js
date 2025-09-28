let h1 = document.querySelector("h1");
function setColor(color,delay,next){
    setTimeout(()=>{
        h1.style.color = color;
        if(next){

            next();
        }
    },delay)
}

function delBtn(element){
    let btn = document.createElement("button");
    btn.innerText = "Delete ";
    btn.classList.add("btn-styling")
    element.append(btn)
}

// callback hell - nesting of caallbacks
setColor("red",1000,()=>{setColor("orange",1000,()=>{setColor("blue",1000,()=>{setColor("maroon",1000)})})})
let ul =document.querySelector("ul");
function dailyWork(work,timeout,callback){
    setTimeout(()=>{

        let li = document.createElement("li");
        li.innerText=work;
        delBtn(li);
        ul.append(li);
    
        if(callback){callback()}
        
    },timeout)
    }   


dailyWork("sabse pehle subah utho",1000,()=>{
    dailyWork("uske bad fresh ho jao",1000,()=>{
        dailyWork("apna work complete kro",1000,()=>{
            dailyWork("khana khao ",1000,()=>{
                dailyWork("Game Khelo ",1000,()=>{
                    dailyWork("Fhir se padne batho",1000,()=>{
                        dailyWork("Patang udao",1000,()=>{
                            dailyWork("khana khao fhir se ",1000,()=>{
                                dailyWork("Padne betho ",1000,()=>{
                                    dailyWork("jab need a jaya ya 2 bj jaye to so jao ",1000)
                                })
                            })
                        })
                    })
                })
            })
        })
    })
});


ul.addEventListener("click",(event)=>{
  if(event.target.nodeName === "BUTTON"){
    console.log("btn was clicked");
    let element = event.target.parentElement;
    element.remove()
    
  }
    
});