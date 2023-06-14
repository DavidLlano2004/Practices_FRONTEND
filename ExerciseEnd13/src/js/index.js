const back = document.querySelector('.back')
const preview = document.querySelector('.preview')
const comments = document.querySelector('.comments')
const named = document.querySelector('.name')
const employee = document.querySelector('.employee')
const img = document.querySelector('.img')

preview.addEventListener('click',()=>{
    img.style.backgroundImage = "url('../../images/image-john.jpg')"
    employee.innerText = 'John Tarkpor'
    named.innerText = 'Junior Front-end Developer'
    comments.innerText='“ If you want to lay the best foundation possible Id recommend taking this course.The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
})

back.addEventListener('click',()=>{
    img.style.backgroundImage = "url('../../images/image-tanya.jpg')"
    employee.innerText = 'UX Engineer'
    named.innerText = ' Tanya Sinclair '
    comments.innerText='“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. Im now in the job of my dreams and so excited about the future. ”'
})
