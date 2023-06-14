const lista = document.querySelector("ul");
  const elementos = lista.querySelectorAll("li");
// Traer datos del index html
const container = document.querySelector('.container')

// Leer las propiedades del data.json
const data = './data.json'
function fetchData(data){
    return fetch(data)
}
fetchData(data)
    .then(res=>res.json())
    .then(data=>{
        for(datas of data){
            

            const container_card= document.createElement('div')
            container_card.classList.add('container-work')

            const color_card= document.createElement('div')
            color_card.classList.add('color-work')

            const image_card=document.createElement('img')
            image_card.setAttribute('src',datas.image)

            const container_info = document.createElement('div')
            container_info.classList.add('container-info')

            const horas = document.createElement('div')
            horas.classList.add('horas')

            const h1_horas = document.createElement('h1')
            h1_horas.innerText = datas.title


            const h2_horas = document.createElement('h2')
            h2_horas.classList.add('h2_horas')
            h2_horas.innerText=datas.timeframes.weekly.current+"hrs"

            
        
            const last_week = document.createElement('div')
            last_week.classList.add('last-week')

            const image_ellipsis = document.createElement('img')
            image_ellipsis.setAttribute('src','./images/icon-ellipsis.svg')

            const p_last_week = document.createElement('p')
            p_last_week.classList.add('p_last_week')
            p_last_week.innerText= `Last week-${datas.timeframes.weekly.previous}`

            container.appendChild(container_card)
            container_card.appendChild(color_card)
            container_card.appendChild(container_info)
            color_card.appendChild(image_card)
            container_info.appendChild(horas)
            container_info.appendChild(last_week)
            horas.appendChild(h1_horas)
            horas.appendChild(h2_horas)
            last_week.appendChild(image_ellipsis)
            last_week.appendChild(p_last_week)


        }

        
    })


// Cambiar color li

elementos.forEach((elemento,i) => {
    elemento.addEventListener("click", () => {
        elementos.forEach((e) => {
            e.classList.remove("color-li");
        });
        elemento.classList.add("color-li");
        var index = i+1
        
    });
});