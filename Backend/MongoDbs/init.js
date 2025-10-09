
const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

async function dbConnect(){
    let url = 'mongodb://127.0.0.1:27017/whatsapp';
    await mongoose.connect(url)
}


dbConnect().then(()=>{
    console.log("Connection established");
    
})
.catch((error)=>{
    console.log("Error in connect the db"+error.message);
    
})

let allCharts = [
    {
        from:"Alex",
        to:"Bob",
        msg:"random words",
        createdAt:new Date(),
    },
    {
        from:"Seikh",
        to:"Karan",
        msg:"random words 1 ",
        createdAt:new Date(),
    },
    {
        from:"Sultan",
        to:"marun",
        msg:"random words 2 ",
        createdAt:new Date(),
    },
    {
        from:"Varun",
        to:"Suman",
        msg:"random words 3 ",
        createdAt:new Date(),
    },
    {
        from:"Kujar",
        to:"Singh",
        msg:"random words 4 ",
        createdAt:new Date(),
    },
    {
        from:"kanjar",
        to:"Kuta",
        msg:"random words 5 ",
        createdAt:new Date(),
    },

]

Chat.insertMany(allCharts)