function chooseEvenOdd(request){
    if(request =='even'){
        return function (n){
           console.log(n%2==0);
           
        }
    }
    else if(request == 'odd'){
         return function (n){
           console.log(n%2!=0);
           
        }
    }
    else{
        return function(){
            console.log("Wrong request");
        }
        
    }
}

let res = chooseEvenOdd(prompt("Enter request: "));
res(prompt("Enter Number"));