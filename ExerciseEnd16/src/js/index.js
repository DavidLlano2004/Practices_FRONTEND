const container_grafics = document.querySelector('.container-grafics')

const data = '../../data.json'
async function getData(dataJson){
    var res = await fetch(dataJson)
    var data = await res.json()
    return data
}

const anotherFunction = async (dataJson)=>{
    try {
        const data = await getData(dataJson)
        
        
            console.log(data);
            let barras = `<div class="container_price_day grafic barra-monday">
            <p class="price-day hiden">$${data[0].amount}</p>
          </div>
          <div class="grafic barra-tuesday">
            <p class="price-day hiden">$${data[1].amount}</p>

          </div>
          <div class="container_price_day grafic barra-wednesday">
            <p class="price-day hiden">$${data[2].amount}</p>

          </div>
          <div class="container_price_day grafic barra-thursday">
            <p class="price-day hiden">$${data[3].amount}</p>

          </div>
          <div class="container_price_day grafic barra-friday">
            <p class="price-day hiden">$${data[4].amount}</p>

          </div>
          <div class="container_price_day grafic barra-saturday">
            <p class="price-day hiden">$${data[5].amount}</p>

          </div>
          <div class="container_price_day grafic barra-sunday">
            <p class="price-day hiden">$${data[6].amount}</p>

          </div>
          <p class="days monday">${data[0].day}</p>
          <p class="days tuesday">${data[1].day}</p>
          <p class="days wednesday">${data[2].day}</p>
          <p class="days thursday">${data[3].day}</p>
          <p class="days friday">${data[4].day}</p>
          <p class="days saturday">${data[5].day}</p>
          <p class="days sunday">${data[6].day}</p>`
            container_grafics.innerHTML = barras
            const grafic = container_grafics.querySelectorAll('.grafic')
            const price_day = document.querySelectorAll('.price-day')
            grafic.forEach((grafics,i)=>{
                grafics.addEventListener('mouseover',()=>{
                    price_day[i].classList.remove('hiden');
                })
                grafics.addEventListener('mouseout',()=>{
                    price_day[i].classList.add('hiden');
            
                })
            })
        
    } catch (error) {
        console.error(error);
    }
}
anotherFunction(data)






