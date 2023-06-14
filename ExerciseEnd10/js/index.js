const data = './data.json'
const summary = document.querySelector('.summary')
function fetchData(data) {
    return fetch(data)
}
fetchData(data)
    .then(res=> res.json())
    .then(data=>{
        for(datas of data){
            let card = `<div class="card-summary">
            <div class="icon-title">
              <span><img src="${datas.icon}" alt=""></span>
              <p>${datas.category}</p>
            </div>
            <div class="score">
              <p> <b>${datas.score}</b> / 100</p>
            </div>
          </div>`
          summary.innerHTML += card
        }
    })