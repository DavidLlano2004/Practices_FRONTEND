const items = document.querySelectorAll('.items')
const itemsP = document.querySelectorAll('.itemsP')
const arrow_up  = document.querySelectorAll('.arrow_up')
const subcontainer_li = document.querySelectorAll('.subcontainer_li')

const container_li = document.querySelector('.container_li')


const image_hamburguer_close = document.querySelector('.image_hamburguer_close')
const icon_hamburguer = document.querySelector('.icon_hamburguer')
const icon_close = document.querySelector('.icon_close')
let activeIndex = -1;
items.forEach((item, i) => {
    item.addEventListener('click', () => {
        if (activeIndex === i) {
            subcontainer_li[activeIndex].classList.toggle('appear');
            itemsP[activeIndex].classList.toggle('colorP')
            arrow_up[activeIndex].classList.toggle('arrowUp')


        } else {
            if (activeIndex !== -1) {
                subcontainer_li[activeIndex].classList.remove('appear');
                itemsP[activeIndex].classList.remove('colorP')
                arrow_up[activeIndex].classList.remove('arrowUp')


                
            }
            itemsP[i].classList.add('colorP')
            arrow_up[i].classList.add('arrowUp')

            subcontainer_li[i].classList.add('appear');
        }
        activeIndex = i;
    });
});


icon_hamburguer.addEventListener('click',()=>{
    icon_hamburguer.classList.add('hiden')
    icon_close.classList.remove('hiden')
    container_li.classList.remove('hiden')

})

icon_close.addEventListener('click',()=>{
    icon_hamburguer.classList.remove('hiden')
    icon_close.classList.add('hiden')
    container_li.classList.add('hiden')


})