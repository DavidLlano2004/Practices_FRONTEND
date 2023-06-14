const bloque = document.querySelectorAll('.bloque')
const h1 = document.querySelectorAll('.h1')

h1.forEach(( cadaH1 , i)=>{
    h1[i].addEventListener('click',()=>{
        bloque.forEach(( cadaBloque ,i)=>{
            bloque[i].classList.remove('activo')
            
        })
        bloque[i].classList.add('activo')
        
    })
})
