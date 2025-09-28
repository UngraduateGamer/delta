let todo = [];
let req = prompt("Please enter your request");
while(true){
    if(req === 'quit'){
        console.log("quitting app");
        break;
    }
    if(req === 'list'){
        console.log("--------------------");
        for(let task of todo){
            console.log(task);    
        }
        console.log("--------------------");
        req = prompt("enter req ")
        
    }
    if(req ==='add'){
        let task =  prompt("enter your task ");
        todo.push(task);
        console.log(todo.length+"Task Added");
        req = prompt("enter request")
        
    }
    if(req === 'delete'){
        let no = prompt("Enter index : ");
        todo.splice(no,1)
            console.log("TaskDeleted");
        req = prompt("enter request")
    }
 

}