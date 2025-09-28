const max = prompt("Enter maximum number: ");
console.log(typeof max);

let input = prompt("enter input");
let num = Math.floor(Math.random()*max)+1;
console.log("num is:",num);
console.log("input is",input);

while(true){
    if(input == num){
        console.log(`Congrats you find the number ${num} `);
        break;        
    }
    else if(input == 'quit'){
        console.log("You quit the game");
        console.log(`${num} is your guessing number`);
        break; 
    }
    else if(num>input){
        console.log("Number is High.");
        input = prompt("enter input");

    }
    else if(num<input){
        console.log("Number is low");
        input = prompt("enter input");
    }
}
