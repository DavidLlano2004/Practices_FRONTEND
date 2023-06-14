const about_project = document.querySelector('.about_project')
const btnAppearMenu = document.querySelector('.btnBack')
const bg_menu_float = document.querySelector('.bg_menu_float')
const container_info_float = document.querySelector('.container_info_float')
const btnClose = document.querySelector('.btnClose')
const container_btns = document.querySelector('.container_btns')
const containerCards = document.querySelector('.containerCards')
const container_thanks = document.querySelector('.container_thanks')
const btnGoIt = document.querySelector('.btnGoIt')
const menu_nav = document.querySelector('.menu_nav')
const btnHamburguer = document.querySelector('.btnHamburguer')
const btnCloseHamburguer = document.querySelector('.btnCloseHamburguer')



btnAppearMenu.addEventListener('click',()=>{
  bg_menu_float.classList.add('apperBgMenu')
  container_info_float.classList.add('animationAppearMenu')
  container_info_float.classList.remove('animationCloseMenu')
  
})

const data = '../../data.json'

const getData = async (dataJson)=>{
    let res = await fetch(dataJson)
    let data = await res.json()
    return data
}

const anotherFunction = async (dataJson)=>{
  try {

        let data = await getData(dataJson)
        let res1 = data.datas.datas1
        let res2 = data.datas.datas2
        
        
        res1.forEach(respuesta => {
          var cards = `<div class="cards_plans">
            <div>
            <h1>${respuesta.title}</h1>
              <p>${respuesta.subTitle}</p>
            </div>
            <p>${respuesta.text}</p>
            <div>
            <h1>${respuesta.price}<i>left</i></h1>
            <button>Select Reward</button>
            </div>
          </div>`
          
          about_project.innerHTML += cards

        });
        res2.forEach(respuesta=>{
          var cards = `
          <div class=" cards_plans_float_menu ">
            <div>
              <input type="radio" class="radio_choose"  name="radio">
              <div class="titl_subtitle_float">
                <h1>${respuesta.title}</h1>
                <h2>${respuesta.subTitle}</h2>
              </div>
            </div>
              <p>${respuesta.text}</p>
            <div>
              <h1>${respuesta.price}<i>left</i></h1>
            </div>
            <div class="enter_pledge hiden">
              <h1>Enter your pledge</h1>
              <div class="input_btn_pledge">
                <input type="number" class="input_number">
                <button class="continue_thanks">Continue</button>
              </div>
            </div>
          </div>`
          containerCards.innerHTML += cards
        })
        const cards_plans_float_menu = document.querySelectorAll('.cards_plans_float_menu')
        const input_number = document.querySelectorAll('.input_number')
        const radio_choose = document.querySelectorAll('.radio_choose')
        const enter_pledge = document.querySelectorAll('.enter_pledge')
        const continue_thanks = document.querySelectorAll('.continue_thanks')

        var position_radio = -1;

        radio_choose.forEach((radios,i)=>{
          radios.addEventListener('click',()=>{

            if(position_radio === i){
              enter_pledge[position_radio].classList.toggle('hiden')
              cards_plans_float_menu[position_radio].style.border="1px solid #d8d8d8"
              input_number[position_radio].value = ""
              
            }else{
              if(position_radio !== -1){
                enter_pledge[position_radio].classList.add('hiden')
                cards_plans_float_menu[position_radio].style.border="1px solid #d8d8d8"
                input_number[position_radio].value = ""
              }
              enter_pledge[i].classList.remove('hiden')
              cards_plans_float_menu[i].style.border="1px solid #3cb4ac"
            }
            position_radio = i

            btnClose.addEventListener('click',()=>{
              bg_menu_float.classList.remove('apperBgMenu')
              container_info_float.classList.remove('animationAppearMenu')
              container_info_float.classList.add('animationCloseMenu')
              enter_pledge[i].classList.add('hiden')
              cards_plans_float_menu[i].style.border="1px solid #d8d8d8"
              radio_choose[i].checked = false
              input_number[i].value = ""

            })

            btnGoIt.addEventListener('click',()=>{
              bg_menu_float.classList.remove('apperBgMenu')
              container_thanks.classList.remove('animationApperThanksClass')
              input_number[i].value = ""
              radio_choose[i].checked = false
              cards_plans_float_menu[i].style.border="1px solid #d8d8d8"
              enter_pledge[i].classList.add('hiden')
            })


          })
        });

        continue_thanks.forEach((continues,i)=>{
          continues.addEventListener('click',()=>{
            container_info_float.classList.remove('animationAppearMenu')
            container_info_float.classList.add('animationCloseMenu')
            setTimeout(()=>{
              container_thanks.classList.add('animationApperThanksClass')
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              });
            },1000)
          })
        })

        
        
      } catch (error) {
        console.error(error);
      }
    }
    anotherFunction(data)

  
  
btnHamburguer.addEventListener('click',()=>{
  menu_nav.classList.remove('hiden')
  btnHamburguer.classList.add('hiden')
  btnCloseHamburguer.classList.remove('hiden')
  bg_menu_float.classList.add('apperBgMenu')

})

btnCloseHamburguer.addEventListener('click',()=>{
  menu_nav.classList.add('hiden')
  btnCloseHamburguer.classList.add('hiden')
  btnHamburguer.classList.remove('hiden')
})
