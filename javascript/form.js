let form = document.querySelector("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let username = document.querySelector("#user");
    let password = document.querySelector("#pass");
    console.log(username.value,password.value);
    
})