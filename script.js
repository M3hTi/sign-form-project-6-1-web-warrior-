const subBtn = document.querySelector('#js-Btn')
const signForm = document.querySelector('#js-form')
console.log(signForm);


function validateUserName() {
    const userName = signForm.querySelector('#username')

    if(userName.validity.valueMissing){
        userName.setCustomValidity('Please enter a username')
    }else if(userName.validity.patternMismatch){
        userName.setCustomValidity('Please enter a valid username(just letters)')
    }else{
        userName.setCustomValidity('')
    }
}


function validateEmail() {
    const emailElement = signForm.querySelector('#email')

    if(emailElement.validity.valueMissing){
        emailElement.setCustomValidity('Please enter a email address')
    }else if(emailElement.validity.typeMismatch){
        emailElement.setCustomValidity('Please enter a valid email address')
    }else{
        emailElement.setCustomValidity('')
    }
}


function validatePassword() {
    const passwordElement = signForm.querySelector('#password')

    if(passwordElement.validity.valueMissing){
        passwordElement.setCustomValidity('Please enter a password')
    }else if(passwordElement.validity.patternMismatch){
        passwordElement.setCustomValidity('Your password must be at least 8 characters with at least one letter and one number')
    }else{
        passwordElement.setCustomValidity('')
    }
}



function confirmPass() {
    const mainPass = signForm.querySelector('#password')
    const vPass = mainPass.value 

    const confirmPass = signForm.querySelector('#confirm-password')
    const vConfirmPass = confirmPass.value

    if (confirmPass.validity.valueMissing) {
        confirmPass.setCustomValidity('Please confirm your password');
    } else if (vPass !== vConfirmPass) {
        confirmPass.setCustomValidity('Your passwords must match');
    } else {
        confirmPass.setCustomValidity('');
    }
}







subBtn.addEventListener('click', validateUserName)
subBtn.addEventListener('click', validateEmail)
subBtn.addEventListener('click', validatePassword)
subBtn.addEventListener('click', confirmPass)