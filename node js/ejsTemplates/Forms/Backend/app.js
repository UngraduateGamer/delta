const express= require("express");
const app = express();
const path = require("path")
app.set("view engine",'ejs');
app.set("views",path.join(__dirname,"/views"));
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("Home routes")
})
app.get("/register",(req,res)=>{
    const {username,password} = req.query;
    console.log(username,password);
    res.send(`hello Good Night , ${username}`);
})
app.post("/register",(req,res)=>{
    const {username,password} = req.body;
    console.log(username,password);
    
    res.send(`hello Good Night , ${username}`);
})
const port = 8080;
app.listen(port,()=>{
    console.log("Server running at port :",port);
})
