//addig elements 
let container = document.querySelector(".container");
let p = document.createElement("p");
container.appendChild(p)
p.style.color = "red";
p.innerText="Hey i'm red!"
let h3 = document.createElement("h3");
container.appendChild(h3)
h3.style.color = "blue";
h3.innerText="I'm blue h3!"
let div = document.createElement("div");
container.appendChild(div);
div.innerHTML="<h1>I'm in a div</h1> <p>MEE TOO!</p>"
div.style.backgroundColor="pink"
div.style.border="2px solid black"