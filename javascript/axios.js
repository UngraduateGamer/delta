let btn = document.querySelector("button")
let p = document.querySelector("p")
let img = document.querySelector("img")
btn.addEventListener("click",async ()=>{
    let response = await getFact();
    p.innerText = response.fact;
    img.setAttribute("src",response.image)
})

const getFact = async()=>{
    let url = 'https://catfact.ninja/fact';
    let url2 ='https://dog.ceo/api/breeds/image/random';
    let res1 = await axios.get(url);
    let res2 = await axios.get(url2);
    
    
    let obj = {
        image:res2.data.message,
        fact:res1.data.fact
    }
    return obj;
    
}

getFact()