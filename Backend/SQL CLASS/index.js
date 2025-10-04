
import { faker } from '@faker-js/faker';
import mysql from "mysql2";
import express from 'express';
const app =express();
app.set("view engine",'ejs');
import path from "path";
import { v4 as uuidv4 } from 'uuid';


import { fileURLToPath } from "url";
import methodOverride from "method-override";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(methodOverride('_method'))
app.set('views',path.join(__dirname,"/views"));
app.use(express.json());
app.set(express.static(path.join(__dirname,"/public")))
app.use(express.urlencoded({extended:true}));
const connection = mysql.createConnection({
  host:'localhost',
    user:'root',
    database:'delta_app',
    password:"Rahuldesigner22@ybl"
  })
  
  // Inserting new data -- using placeholders
// let q = "INSERT INTO user (id,username,email,password) VALUES ? ;";
const getRandomUser=()=> {
  return[
   faker.string.uuid(),
faker.internet.username(),
  faker.internet.email(),
     faker.internet.password()
  ]
}

// let data = [];
// for(let i=0;i<100;i++){
//   let elem = getRandomUser();
//   data.push(elem);// 100 fake user data
  
// }




// try{
//     connection.query(q,[data],function (err,res){
//         if(err) {
//           console.log("error :",err)
//         } 

//         console.log(res);
        
//     })
// }catch(err){
//     console.log(err);
    
// }
// connection.end(); //close connection

app.get("/",(req,res)=>{
    let q = 'SELECT count(*) from user;'
    try{
 connection.query(q, function (err,result){
        if(err) {
          console.log("error :",err)
        } 
    let count = result[0]['count(*)'];
        
        res.render("home",{count})
        
    })
    }catch(error){
      console.log(error);
      res.send("error")
    }
})
app.get("/user",(req,res)=>{
    let q = 'SELECT * from user ORDER BY username;'
    try{
 connection.query(q, function (err,result){
        if(err) {
          console.log("error :",err)
        } 

        res.render("showUser",{result})
        
    })
    }catch(error){
      console.log(error);
      res.send("error")
    }
})

app.get("/user/:id/edit",(req,res)=>{
  let id =req.params.id;
    let q = `SELECT * from user WHERE id = '${id}' ;`
    try{
 connection.query(q, function (err,result){
        if(err) {
          console.log("error :",err)
        } 
        result = result[0]
        console.log(result);
        
        res.render("edit",{result })
        
    })
    }catch(error){
      console.log(error);
      res.send("error")
    }
})


app.patch("/user/:id",(req,res)=>{
  let id = req.params.id;
  let {username,password} = req.body;
  let q = `SELECT password FROM USER WHERE ID = '${id}' ;`;
  try{
    connection.query(q,function(err,result){
      if(err){
        console.log(err);
      }
      result = result[0]['password'];
      console.log(result);
      
      if(password === result){
        try{
          let q = `UPDATE user SET username = '${username}' WHERE ID = '${id}'`;
          connection.query(q,(err,result)=>{
            if(err){
              console.log(err); 
            }
            res.redirect("/user");

          })
        } catch(error){
          console.log("error");
          res.send("error")
          
        }       
        
      }
      else{
        res.send("wrong password")
        
      }
      
    })
  }catch(error){
    console.log(error);
    res.send("Error while fetching the password")
    
  }
 
})

// add new user -- get request
app.get("/user/add",(req,res)=>{
    res.render("addUser")
})

// add user in db
app.post("/user",(req,res)=>{
  const {username,email,password} = req.body;
  const id = uuidv4();
  try{
    let q = `INSERT INTO user (id,username,email,password) VALUES ('${id}','${username}','${email}','${password}');`;
    connection.query(q,(err,result)=>{
      if(err) throw err;
      res.redirect("/user")
    })
  }catch(error){
    console.log(error);
    
  }
})




app.get("/user/:id/delete",(req,res)=>{
  let id =req.params.id;
    let q = `SELECT * from user WHERE id = '${id}' ;`
    try{
 connection.query(q, function (err,result){
        if(err) {
          console.log("error :",err)
        } 
        result = result[0]
        console.log(result);
        
        res.render("deleteUser",{result })
        
    })
    }catch(error){
      console.log(error);
      res.send("error")
    }
})


app.delete("/user/:id",(req,res)=>{
  let id = req.params.id;
  let {username,password} = req.body;
  let q = `SELECT password FROM USER WHERE ID = '${id}' ;`;
  try{
    connection.query(q,function(err,result){
      if(err){
        console.log(err);
      }
      result = result[0]['password'];
      console.log(result);
      
      if(password === result){
        try{
          let q = `DELETE FROM user where id = '${id}'`;
          connection.query(q,(err,result)=>{
            if(err){
              console.log(err); 
            }
            res.redirect("/user");

          })
        } catch(error){
          console.log("error");
          res.send("error")
          
        }       
        
      }
      else{
        res.send("wrong password")
        
      }
      
    })
  }catch(error){
    console.log(error);
    res.send("Error while fetching the password")
    
  }
 
})



app.listen(8080,()=>{
  console.log("Server running");
})