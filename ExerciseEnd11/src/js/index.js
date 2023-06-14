// import fetch from "node-fetch";
const API = 'https://api.adviceslip.com/advice'
const advices = document.querySelector('.advices-2')
const img_btn = document.querySelector('.img-btn')

const button = document.querySelector('.btn-dado')
const h2 = document.createElement('h2')
const p = document.createElement('p')

button.addEventListener('click',function(){
    location.reload()
})

async function getData(urlApi){
    const res = await fetch(urlApi)
    const data = await res.json()
    return data.slip
}
const anotherFunction = async(urlApi)=>{
    try {
        const data = await getData(urlApi)
        h2.innerText= `Advice # ${data.id}`
        p.innerText= data.advice

        advices.appendChild(h2)
        advices.appendChild(p)

        
        
    } catch (err) {
        console.error(err);
    }
}
anotherFunction(API)
