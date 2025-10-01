import express from 'express';
const app = express();
import { fileURLToPath } from "url";
import path from "path";
import methodOverride from 'method-override';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 8080;
import { v4 as uuidv4 } from 'uuid';

app.set("view engine",'ejs');
app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public")))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
let posts = [
    {username:"Rahul",
        content:"i got selected",
        id:"d55sdfs1fsd"
    },
    
    {username:"Prince",
        content:"i got selected too",
         id:"d55sdfs1f"
    },
    
    {username:"Jasraj",
        content:"i got selected too Amazon",
         id:"d55sdfs1fs"
    },
    {username:"Nikhil",
        content:"nothing done here",
         id:"d55sdfs1fsdsdsa"
    },

]
app.use(methodOverride('_method'))
app.get("/",(req,res)=>{
    res.send("Home routes")
})
// show all posts
app.get("/posts",(req,res)=>{
    res.render("index",{posts})
})

//save info to the array
app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({username,content,id})
    
    res.redirect("/posts")
})

//create new post
app.get("/posts/new",(req,res)=>{
    res.render("form")
})

// get post by id
app.get("/posts/:id",(req,res)=>{
    let id = req.params.id;
   let result =  posts.find((post)=>{return post.id == id});
   
   
    res.render("show",{post:result});
})
//  post  edit 
app.get("/posts/:id/edit",(req,res)=>{
    let id = req.params.id;
    let result = posts.find((post)=>{return post.id == id});
    res.render("editPost",{post:result})
})

// update post 
app.patch("/posts/:id",(req,res)=>{
    let {id,content} = req.body;
    
   let result = posts.find((post) => { return post.id == id });
    result.content = content;
    
    res.redirect("/posts")
    
})

//delete a post by id
app.delete("/posts/:id",(req,res)=>{
   let id = req.params.id;
   posts = posts.filter((post)=>{return post.id != id})
    res.redirect("/posts")
    
})
app.listen(PORT,()=>{
    console.log(`Server running at port no ${PORT}`);
    
})