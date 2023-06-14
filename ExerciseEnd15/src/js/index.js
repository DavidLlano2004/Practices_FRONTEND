const btndissmis = document.querySelector('.btndissmis')
const inputEmail= document.getElementById('inputEmail')
const btnsub = document.querySelector('.btnsub')
const container_form = document.querySelector('.container-form')
const container_thanks = document.querySelector('.container-thanks')
const error_mesage = document.querySelector('.error_mesage')
const email_sub  = document.querySelector('.email_sub')



btnsub.addEventListener('click',()=>{
    const esCorreoElectronico = correoElectronico => /\S+@\S+/.test(correoElectronico);
    var correo = inputEmail.value;

    if(inputEmail.value == '' || !esCorreoElectronico(correo)){
        error_mesage.classList.remove('hiden')
        inputEmail.style.border='1px solid red'
    }else{
        email_sub.innerText = correo
        container_form.classList.add('hiden')
        container_thanks.classList.remove('hiden')
    }

})

btndissmis.addEventListener('click',()=>{
    container_form.classList.remove('hiden')
    container_thanks.classList.add('hiden')
    error_mesage.classList.add('hiden')
    inputEmail.style.border='1px solid grey'
    inputEmail.value=''


})


 
