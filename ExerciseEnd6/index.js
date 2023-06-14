const menu_open = document.querySelector('.menu-sm')
const menu_options = document.querySelector('.menu-md-options')
const menu_login_registe = document.querySelector('.menu-md-login-register')
const container_subAll = document.querySelector('.container-subAll')
const acordeon2 = document.querySelector('.acordeon2')
const acordeon3 = document.querySelector('.acordeon3')


const opensubtext1 = document.querySelector('.open-sub-text1')
const opensubtext2 = document.querySelector('.open-sub-text2')




menu_open.addEventListener('click',()=>{
    menu_options.classList.toggle('open')
    menu_login_registe.classList.toggle('open')
    container_subAll.classList.toggle('overflow')

})

acordeon2.addEventListener('click',()=>{
    opensubtext1.classList.toggle('overflow2')
})

acordeon3.addEventListener('click',()=>{
    opensubtext2.classList.toggle('overflow2')
})
