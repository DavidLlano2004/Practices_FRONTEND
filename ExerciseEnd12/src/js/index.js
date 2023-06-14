const menu_burguer = document.querySelector('.img-hamburguer')
const menu = document.querySelector('.menu')

if(screen.width<700){
    menu.classList.remove('hiden')
}
menu_burguer.addEventListener('click',()=>{
    menu.classList.toggle('hiden')
})