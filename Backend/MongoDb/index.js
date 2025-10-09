import string from "figlet/fonts/babyface-lame";
import mongoose from "mongoose";

let url = 'https://localhost:8080/users';
async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
main().then(()=>{
    console.log("connection successful");
    
})
.catch((err=>{
    console.log(err);
}))

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})



const User = mongoose.model("User",userSchema);
// const user1 = new User({name:"Rahul",email:"rahul@rahul.com",age:50});
// const user2= new User({name:"Prince",email:"prince@prince.com",age:50});



// await user1.save();
// await user2.save().then(()=>{console.log("Data saved to db");
// }).catch((err)=>{console.log(err);
// })
// console.log(user1);
// // const res = await User.find({age:{$gt:25}});
// // console.log(res);

// const rest = await User.findOneAndUpdate({_id:"68e422517918eb39352ff3da"},{name:"Pandu Chor"},{$new:true});
// // console.log(rest);

// const res = await  User.findById("68e422517918eb39352ff3da");
// console.log(res);

await User.deleteMany({name:"Prince"});