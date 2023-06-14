// Declaracion de Variables
const iconError = document.querySelector('.iconError')
const textError = document.querySelector('.textError')
const inputEmail = document.querySelector('.inputEmail')
const buttonSubmit = document.querySelector('.submit')
const textvarError = document.createTextNode('Please provid a valid email')
const textvarAcces = document.createTextNode('You send the email correctly')

// Funciones
buttonSubmit.addEventListener('click',()=>{
    var validarEmail = inputEmail.value
    // while (!validarEmail.includes('@')) {
    //     iconError.classList.remove('hidden')
    //     textError.appendChild(textvarError)
    //     inputEmail.value = ''
    //     textError.removeChild(textvarAcces)
    //     validarEmail ++

    // }

    // iconError.classList.add('hidden')
    // inputEmail.value = ''
    // setTimeout(()=>{
    //     textError.classList.add('hidden')

    // },2000)
    // textError.appendChild(textvarAcces)
    // textError.removeChild(textvarError)

       
    if(validarEmail.includes('@')){

        iconError.classList.add('hidden')
        inputEmail.value = ''
        textError.appendChild(textvarAcces)
        textError.removeChild(textvarError)
        setTimeout(()=>{
            textError.classList.add('hidden')

        },2000)

        


    }else if(!validarEmail.includes('@')){
        iconError.classList.remove('hidden')
        textError.classList.remove('hidden')
        inputEmail.value = ''
        textError.appendChild(textvarError)
        textError.removeChild(textvarAcces)
        

        
    }
   
})


