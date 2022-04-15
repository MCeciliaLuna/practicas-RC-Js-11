console.log('Javascript 12')

const emailValidation = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/

const validate = (email) => {
  //console.log(emailValidation.test(email))
  if (emailValidation.test(email)){
    alert('ud. cumple con las condiciones')
    return
  }
    alert('ud. no cumple con las condiciones')
}

validate('ceciluna@gmail.com')
validate('cecilunagmail.com')