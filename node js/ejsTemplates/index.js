const express = require("express");
const app = express();
const path = require("path")
const data = require("./data.json")
// set view engine
app.set("view engine",'ejs');
app.set("views",path.join(__dirname,"/views"));
app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/about",(req,res)=>{
    res.send("About page")
})
app.get("/rolladice",(req,res)=>{
    let diceValue = Math.floor(Math.random()*6)+1;
    res.render("dice",{diceValue}) // send the value of variable in the ejs page.
})

app.get("/ig/:username",(req,res)=>{

    
    let {username} = req.params;
    res.render("instagram",{username}) // passs the value of username in the instagram ejs
    
})
app.get("/user",(req,res)=>{
    const datas = data.results[0];
    res.render("user",{datas})
})
const PORT = 8080;
app.listen(PORT,()=>{
    console.log("App running at port no : ",PORT);
    
})