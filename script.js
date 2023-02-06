function validateMobile(){
    let regExPhone= /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g
    let mobile=document.getElementById('mobile')
    let phone_error=document.getElementById('phone-error')
    // /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/g
    console.log(mobile.value)

    if(mobile.value.trim()==''){
        phone_error.innerHTML="Phone number can not be blank"
        return false
    }

    else if(!mobile.value.match(regExPhone)){
        phone_error.innerHTML="Phone number should contain 10 digits"
        return false
    }

    else{
        phone_error.innerHTML="<span></span>"
        return true
    }
}

function validatePassword(){
    let password=document.getElementById('password')
    let password_error=document.getElementById('password-error')

    if(password.value.trim()==''){
        password_error.innerHTML="Password can not be blank"
        return false
    }

    else if(password.value.length<3){
        password_error.innerHTML="Password should not be less than 3 characters"
        return false
    }

    else if(password.value.length>20){
        password_error.innerHTML="Password should not be more than 20 characters"
        return false
    }

    else{
        password_error.innerHTML="<span>Validated !!</span>"
        return true
    }
}

function validateEmail(){
    let regExEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let email=document.getElementById('email')
    let email_error=document.getElementById('email-error')

    if(email.value.trim()==''){
        email_error.innerHTML="Email id can not be blank"
        return false
    }
    else if(!email.value.match(regExEmail)){
        email_error.innerHTML="Enter valid Email ID"
        return false
    }
    else{
        email_error.innerHTML="<span></span>"
        return true
    }
}

function validateForm(){
    if(validateName() && validatePassword() && validateEmail()){
    //  || !validatePhone() ){
        return true
    }else{
        return false
    }
}
