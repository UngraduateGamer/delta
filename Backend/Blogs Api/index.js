import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from "uuid";
import methodOverride from 'method-override';
const app = express();
const PORT = 8080;

// __dirname setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(methodOverride('_method'))
app.set("view engine",'ejs');
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));



let posts = [
  {
    id: "1a2b3c",
    username: "Rahul",
    content: "आज मैंने Node.js और Express सीखना शुरू किया है 🚀"
  },
  {
    id: "2b3c4d",
    username: "Prince",
    content: "मेरा पहला ब्लॉग पोस्ट है, इसमें मैं अपने college life के बारे में लिख रहा हूँ।"
  },
  {
    id: "3c4d5e",
    username: "Jasraj",
    content: "Amazon में selection हो गया 🎉 अब ज़िंदगी बदल जाएगी।"
  },
  {
    id: "4d5e6f",
    username: "Nikhil",
    content: "आज थोड़ा coding में मन नहीं लगा 😅"
  },
  
];



app.get("/",(req,res)=>{
    res.send("Home Routes here")
})

// show all posts - get request
app.get("/posts",(req,res)=>{
    res.render("index",{posts})
})


//get post by id -get request
app.get("/posts/post/:id",(req,res)=>{
    let id = req.params.id;
    let result = posts.find((post)=>{return post.id == id})
    if(result){
      res.render("post",{post:result})
    }
    else{
      res.send("Post is empty")
    }
      
})

// GET form page
app.get("/posts/new", (req, res) => {
  res.render("form"); // views/form.ejs render करेगा
});
// create post - post request
app.post("/posts",(req,res)=>{
    let id = uuidv4();
    let {username,content}= req.body;
    posts.push({username,content,id});
    console.log(username,id,content);
    
   res.redirect("/posts")
})

//get request edit post
app.get("/posts/edit/:id",(req,res)=>{
    let id = req.params.id;
    let result = posts.find((post)=>{return post.id == id});
    res.render("edit",{post:result})

}) 

// edit post - put request
app.put("/posts/:id",(req,res)=>{
    let id = req.params.id;
    let result = posts.find((post)=>{return post.id == id});
    let {username,content} = req.body;
    result.username = username;
    result.content = content;
    res.redirect("/posts")
})

// delete post by id - delelte request
app.delete("/posts/:id",(req,res)=>{
  let id = req.params.id;
  posts = posts.filter((post)=>{return post.id != id})
  res.redirect("/posts")
})

app.listen((PORT),()=>{
    console.log("App is running at port "+PORT);
    
})