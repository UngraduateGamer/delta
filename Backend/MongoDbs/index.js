const express = require("express")
const app = express()
const port = 8080;
const mongoose = require("mongoose");
const path = require("path")
const Chat = require("./models/chat.js");
const chat = require("./models/chat.js");
var methodOverride = require('method-override')
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json())
app.use(express.urlencoded({extended:true}))
async function dbConnect(){
    let url = 'mongodb://127.0.0.1:27017/whatsapp';
    await mongoose.connect(url)
}
app.use(methodOverride('_method'))

dbConnect().then(()=>{
    console.log("Connection established");
    
})
.catch((error)=>{
    console.log("Error in connect the db"+error.message);
    
})


// let chat1 = new Chat({
//     from:"rahul",
//     to:"Prince",
//     msg:"Hey!",
//     createdAt:new Date()
// })
// chat1.save();
app.get("/",(req,res)=>{
    res.send("Hlo");
})

// index route -- get request
app.get("/chats",async(req,res)=>{
    let chats = await chat.find();
    // console.log(chats);
    res.render("index",{chats})
    
})

// new routes
app.get("/chats/new",(req,res)=>{
    res.render("new")
})

// create chart 
app.post("/chats",async(req,res)=>{
    let {from,to,msg} = req.body;
    let createdAt = new Date();
    let newChat = new chat({
        from,
        to,
        msg,
        createdAt
    })
    await newChat.save()
    res.redirect("/chats")
    
})


// edit route --get
app.get("/chat/:id",async(req,res)=>{
    let id =req.params.id;
    let data = await chat.findById(id);
    res.render("edit",{data})

})


// edit route - put
app.put("/chat/:id/edit",async(req,res)=>{
    let {msg} = req.body;
    let id = req.params.id;
    let updatedChats = await chat.findByIdAndUpdate(id,{msg},{new:true});
    console.log(updatedChats);
    
    res.redirect("/chats")
})

// delete route - delete
app.delete("/chat/:id",async(req,res)=>{
    let id  = req.params.id;
    let deletedChat = await chat.findByIdAndDelete(id);
    res.redirect("/chats")
})
app.listen(port,()=>{
    console.log("Serving running at port no: ",port);
    
})