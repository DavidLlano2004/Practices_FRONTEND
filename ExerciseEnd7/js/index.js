const inputDia = document.querySelector('.dia')
const inputMes = document.querySelector('.mes')
const inputAño = document.querySelector('.año')
const btn_enter = document.querySelector('.btn-enter')
const numero_años = document.querySelector('.guiones_numeros_años')
const numero_meses = document.querySelector('.guiones_numeros_meses')
const numero_dias = document.querySelector('.guiones_numeros_dias')
const diaP = document.querySelector('.diaP')
const mesP = document.querySelector('.mesP')
const añoP = document.querySelector('.añoP')
const labelAño = document.querySelector('.labelAño')
const labelMes = document.querySelector('.labelMes')
const labelDia = document.querySelector('.labelDia')






btn_enter.addEventListener('click',(e)=>{
    // Formula para detectar años
    if(e){
        if(inputAño.value == "" || inputMes.value == "" || inputDia.value == ""){

                inputDia.style.borderColor = 'red'
                inputMes.style.borderColor = 'red'
                inputAño.style.borderColor = 'red'

                labelAño.style.color  = 'red'
                labelMes.style.color  = 'red'
                labelDia.style.color  = 'red'


                diaP.textContent = "Este campo es requerido"
                mesP.textContent = "Este campo es requerido"
                añoP.textContent = "Este campo es requerido"
            

        }else if(inputAño.value > 2023 || inputAño.value < 1900){

            inputAño.style.borderColor = 'red'
            labelAño.style.color  = 'red'

            añoP.textContent = "Año incorrecto"
            diaP.textContent = ""
            mesP.textContent = ""

        }else if(inputMes.value > 12){

            inputMes.style.borderColor = 'red'
            labelMes.style.color  = 'red'

            mesP.textContent = "Mes incorrecto"
            añoP.textContent = ""
            diaP.textContent = ""

        }else if(inputDia.value > 31){

            inputDia.style.borderColor = 'red'
            labelDia.style.color  = 'red'

            diaP.textContent = "Día incorrecto"
            mesP.textContent = ""
            añoP.textContent = ""
        }else{

            inputDia.style.borderColor = ''
            inputMes.style.borderColor = ''
            inputAño.style.borderColor = ''

            labelAño.style.color  = ''
            labelMes.style.color  = ''
            labelDia.style.color  = ''


            diaP.textContent = ""
            mesP.textContent = ""
            añoP.textContent = ""

            var today = new Date();
            var specificDate = new Date(`${inputAño.value}-${inputMes.value}-${inputDia.value}`);
            var differenceInMilliseconds = today.getTime() - specificDate.getTime();
            var differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
            var years = Math.floor(differenceInDays / 365);
            var months = Math.floor((differenceInDays % 365) / 30);
            var days = Math.floor((differenceInDays % 365) % 30);

            
                
                    
            numero_años.textContent = years
            numero_dias.textContent = days
            numero_meses.textContent = months
        }
    }
    
    
})


