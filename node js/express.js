// express - it is a node js web application framework used for make web application.  used for server side programming.
import express from 'express'
const app = express();
// console.dir(app)

app.get("/",(req,res)=>{
    res.send("<h1>home page</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>About page</h1>")
})

// req.params() -- it is treat like a variable
app.get("/profile/:name",(req,res)=>{
    let name = req.params.name;
    res.send(`<h1>hello, ${name}</h1>`)
})

// query string
app.get("/search",(req,res)=>{
    console.log(req.query); //all queries  eg - ?q='any'
    res.send("Querry search")
})

// app.get("*") - jab hum bnaya huya routes ke alawa aur koi routes par jata hai to yeh vala code execute hoga
app.get(/.*/, (req,res) => {
    res.status(404).send(`
        <body style="margin:0; padding:0; font-family:Arial,sans-serif; background-color:#f2f2f2; display:flex; justify-content:center; align-items:center; height:100vh; text-align:center;">
            <div style="max-width:600px;">
                <h1 style="font-size:10rem; margin:0; color:#ff4c4c;">404</h1>
                <h2 style="font-size:2rem; margin:10px 0;">Oops! Page Not Found</h2>
                <p style="font-size:1rem; color:#555;">The page you are looking for might have been removed, renamed, or never existed.</p>
                <a href="/" style="display:inline-block; margin-top:20px; padding:12px 25px; background-color:#ff4c4c; color:white; text-decoration:none; border-radius:5px; transition:0.3s;"
                   onmouseover="this.style.backgroundColor='#e04343';" onmouseout="this.style.backgroundColor='#ff4c4c';">Go Back Home</a>
            </div>
        </body>
    `);
});


// app.use((req,res)=>{
//     res.send("yeh koi bhi request ke liye chalega "); //app.use() -means that execute the code during any requests.
// })
app.listen(3000,()=>{
    console.log("App is running at port no. 3000");
    
})