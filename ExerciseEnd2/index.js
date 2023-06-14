const share = document.querySelector('.share')
const box_share = document.querySelector('.box-share')
share.addEventListener('mouseover',()=>{
    box_share.classList.remove('ocultar')
})
share.addEventListener('mouseout',()=>{
    box_share.classList.add('ocultar')

})