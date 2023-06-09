//Imports for Sign Up page:
const container = document.querySelector('.container');
const containerHeader = document.querySelector('.container#container_header');
const subContainer = document.querySelector('.container#user_inputs');
let companyName = document.getElementById('company_name');
let cnpj = document.getElementById('cnpj');
let responsibleName = document.getElementById('responsible_name');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('pswrd');
let confirmPassword = document.getElementById('confirm_pswrd');
let submitBtn = document.querySelector('.submitbtn');
let form = document.querySelector('form');

const FindInputFields = document.querySelectorAll('input');
console.log(FindInputFields);
const inputFields = Array.from(FindInputFields);
console.log(inputFields);


function isValidEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}$/;
    return passwordRegex.test(password);
  }


function checkInputExistence(){
    inputFields.forEach(field =>{
        if(!field.value){
            field.placeholder = 'Campo Obrigatório';
            field.classList.add('invalid');
        }
        field.addEventListener('click', function(){
            if (field.dataset.originalPlaceholder) {
                field.placeholder = field.dataset.originalPlaceholder;
              }
            field.classList.remove('invalid');

    })
})
return inputFields.some(field =>!field.value) 
}


function validateUserInput(){
    inputFields.forEach(field =>{
        if(field === companyName){
            const companyNameValue = companyName.value;
            if(companyNameValue.length < 2){
                companyName.classList.add('invalid');
                companyName.setCustomValidity('O nome da Empresa deve conter no mínimo dois caracteres');
                companyName.reportValidity();
            }
        }

        if(field === cnpj){
            const cnpjValue = cnpj.value;
            if(cnpjValue.length !== 14){
                cnpj.classList.add('invalid');
                cnpj.setCustomValidity('O CNPJ deve seguir o padrão nacional de 14 dígitos')
                cnpj.reportValidity();
            }
        }
        
        if(field === responsibleName){
            const resposibleNameValue = responsibleName.value;
            if (resposibleNameValue.length < 2){
                responsibleName.classList.add('invalid');
                responsibleName.setCustomValidity('O nome do Resposável deve conter no mínimo dois caracteres');
                responsibleName.reportValidity();
            }
        }

        if(field === email){
        const emailValue = email.value;
            if(isValidEmail(emailValue)== false){
                email.classList.add('invalid');
                email.setCustomValidity('Insira um endereço de e-mail válido')
                email.reportValidity();
            }
        }

        if(field === phone){
            const phoneValue = phone.value; 
            if (phoneValue.length < 10 && phone.value > 11){
                phone.classList.add('invalid');
                phone.setCustomValidity('O telefone deve conter DDD + Telefone');
                phone.reportValidity();
            }
        }

        if(field === password){
            const passwordValue = password.value
            if(validatePassword(passwordValue) === false){
                password.classList.add('invalid');
                password.setCustomValidity('A senha deve conter no mínimo 6 caracteres e utilizar no mínimo um caractere especial, uma letra e um número')
                password.reportValidity();
        }
        }

        if(field === confirmPassword){
            const confirmPasswordValue = confirmPassword.value;
            if(password.value !== confirmPasswordValue){
                confirmPassword.classList.add('invalid');
                confirmPassword.setCustomValidity('As senhas não correspondem ')
                confirmPassword.reportValidity();
        }
        }


        field.addEventListener('input', function() {
            field.classList.remove('invalid');
            field.setCustomValidity('');
        })
    
    })
        return inputFields.some(field => field.classList.contains('invalid') )
    
    }
    


inputFields.forEach(field => {
    if (!field.value) {
      if (!field.dataset.originalPlaceholder) {
        field.dataset.originalPlaceholder = field.placeholder;
      }
    }   
});

inputFields.forEach(field => {
    field.addEventListener('focus', function() {
        field.classList.add('active');
    });

    field.addEventListener('blur', function() {
        field.classList.remove('active');
    });
});

function storeInfo(){

    inputFields.forEach(field =>{
        if(field){
            if(field === companyName){
                const storedCompanyName = companyName.value;
                localStorage.setItem('Company', storedCompanyName);
                console.log('Storedcompany:', storedCompanyName);
            }
            
    
            if(field === cnpj){
                const storedcnpj = cnpj.value;
                localStorage.setItem('CNPJ', storedcnpj);
                console.log('Stored cnpj:', storedcnpj);   
            }
            
            if(field === responsibleName){
                const storedResponsibleName = responsibleName.value;
                localStorage.setItem('Responsible', storedResponsibleName);
                console.log('Stored responsible:', storedResponsibleName);
            }
    
            if(field === email){
                const storedEmail = email.value;
                localStorage.setItem('E-mail', storedEmail);
                console.log('Stored email:', storedEmail);   
            }
    
            if(field === phone){
                const storedPhone = phone.value;
                localStorage.setItem('phone', storedPhone);
                console.log('Stored phone:', storedPhone);
            }
    
            if(field === password){
                const storedPassword = password.value;
                localStorage.setItem('password', storedPassword);
                console.log('Stored password:', storedPassword);   
            }
    
            if(field === confirmPassword){
                const storedConfirmPassword = confirmPassword.value;        
                localStorage.setItem('Confirmed password', storedConfirmPassword);
                console.log('Stored confirmed password:', storedConfirmPassword);
            }
        
        }
    })
        
}


submitBtn.addEventListener('click', function(e){
    checkInputExistence();
    validateUserInput();
    if (!checkInputExistence() && !validateUserInput()) {
           storeInfo();
      } else {
        submitBtn.disabled = false;
        validateUserInput();
      }
      
})
