let body = document.body;
let input = document.createElement("input");
let button = document.createElement("button");
body.append(input,button);
button.innerText = "Click me";
input.placeholder="username";
button.setAttribute("id","btn")
console.log(button);
let btn = document.querySelector("#btn");
    btn.style.backgroundColor = "blue";
    btn.style.color = "white";
let h1 = document.createElement("h1");
h1.innerText = "DOM Practise";
h1.style.textDecoration = "underline";
h1.style.color = "purple";
body.append(h1);
let p = document.createElement("p");
p.innerHTML = "paragraph here <b>bold</b>....";

body.append(p);