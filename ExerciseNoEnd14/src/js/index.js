const mycheck = document.querySelector('.mycheck')
const container_cards = document.querySelector('.container-cards')

const data = "../../data.json";

function getData(dataCard){
    return fetch(dataCard)    
}
getData(data)
.then(res=>res.json())
.then(data=>{
    for ( datas of data) {
        let datahtml = `<div class="basic-proffesional-master">
        <h2>${datas.tittle}</h2>
        <h1>${datas.time.monthly }</h1>
        <p>${datas.storage}</p>
        <p>${datas.users}</p>
        <p>${datas.send}</p>
        <button class="button">Learn more</button>
        </div>`
        container_cards.innerHTML += datahtml
    }
})








    
    
    
    