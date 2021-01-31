const name = document.getElementsById('uname')
const password = document.getElementsById('pass')
const register = document.getElementsByClassName('register')
const errorElement = document.getElementById('error')

register.addEventListener('submit',(e)=>{
    let messages = []
    if(password.value.length <= 6){
         messages.push('Too weak! Password should be of at least 8 character.')
    }
    
    
    
    
    if(messages.length > 0){
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }


}) 

