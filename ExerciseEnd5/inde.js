const active_bottom = document.querySelector('.container-menu-sm')
const opacity = document.querySelector('.opacity1')
const li_Items = document.querySelector('.container-menu-md')
const container_content = document.querySelector('.container-content') 

active_bottom.addEventListener('click',()=>{
    opacity.classList.toggle('opacity')
    li_Items.classList.toggle('active')
    container_content.classList.toggle('overFlow2')
})