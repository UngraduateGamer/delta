const figlet = require("figlet");
figlet("Rahul !",(err,data)=>{
    if(err){
        console.log("Something went wrong");
        
    }
    console.log(data);
    
})
