//Faça com que o usuário possa alterar informações da conta, que serão salvas em localStorage, como url da imagem de perfil, e-mail e nome.
let userData = {
  firstName: "Marianna",
  surname: "Silva",
  birthdate: "02/22/1996",
  phone: 5553999999999, 
  email: "marianna.silva@doman.com",
  adress: "Rua das Rosas, 525 - Centro, João Pessoa",
  };

  let userNameKey = "Name";
  let userSurnameKey = "Surname";
  let userBirthdateKey = "Birthdate";
  let userPhoneKey = "Phone";
  let userEmailKey = "E-mail";
  let userAdressKey = "Adress"


//guarda informações prévias no Local Storage como default
function standardObjectLocalStorage(userData){
if(userData != null){
  
  let serializedUserName = userData.firstName;
  localStorage.setItem(userNameKey, serializedUserName);

 
  let serializedUserSurname = userData.surname;
  localStorage.setItem(userSurnameKey , serializedUserSurname);


  let serializedUserBirthdate = userData.birthdate;
  localStorage.setItem(userBirthdateKey , serializedUserBirthdate);


  let serializedUserPhone = userData.phone;
  localStorage.setItem(userPhoneKey , serializedUserPhone);


  let serializedUserAdress = userData.adress;
  localStorage.setItem(userAdressKey , serializedUserAdress);
}};


function printStandardOnPage(){
  let showStandardName = document.getElementById("standard-name");
  let standardName = localStorage.getItem(userNameKey);
  showStandardName.innerHTML = standardName; 

  let showStandardSurname = document.getElementById("standard-surname");
  let standardSurname = localStorage.getItem(userSurnameKey);
  showStandardSurname.innerHTML = standardSurname; 

  let showStandardBirthdate = document.getElementById("standard-birthdate");
  let standardBirthdate = localStorage.getItem(userBirthdateKey);
  showStandardBirthdate.innerHTML = standardBirthdate; 

  let showStandardPhone = document.getElementById("standard-phone");
  let standardPhone = localStorage.getItem(userPhoneKey);
  showStandardPhone.innerHTML = standardPhone; 

  let showStandardEmail = document.getElementById("standard-email");
  let standardEmail = localStorage.getItem(userEmailKey);
  showStandardEmail.innerHTML = standardEmail; 
  
  let showStandardAdress = document.getElementById("standard-adress");
  let standardAdress = localStorage.getItem(userAdressKey);
  showStandardAdress.innerHTML = standardAdress; 
}


// standardObjectLocalStorage(userData);


//eu quero uma função que se inicie onload, para mostrar essas informações
// Mostrando dados standard na página
window.addEventListener('load', function() {
  standardObjectLocalStorage(userData);
  printStandardOnPage()
})

/////////////////////////////////////////////////////////////////////////////////////////


//Inserindo área de input para mudar o nome

//funções a serem ativadas nos botões:

//Para o botão edit:
let editButtons = document.querySelectorAll(".editInformation");
editButtons.forEach(function(button){
  button.addEventListener("click", function (e){
    e.preventDefault();

    let nameInputBox = document.getElementById("nameInputBox");
    let surnameInputBox = document.getElementById("surnameInputBox");
    let birthDateInputBox = document.getElementById("birthDateInputBox");
    let emailInputBox = document.getElementById("EmailInputBox");
    let phoneInputBox = document.getElementById("PhoneInputBox");  
    let addressInputBox = document.getElementById("addressInputBox");
    
      if(button.id === "changeName"){
        nameInputBox.style.display = "block";
        surnameInputBox.style.display = "none";
        birthDateInputBox.style.display = "none";
        emailInputBox.style.display = "none";
        phoneInputBox.style.display = "none";
        addressInputBox.style.display = "none";

      } else if(button.id === "changeSurname"){
        nameInputBox.style.display = "none";
        surnameInputBox.style.display = "block";
        birthDateInputBox.style.display = "none";
        emailInputBox.style.display = "none";
        phoneInputBox.style.display = "none";
        addressInputBox.style.display = "none";

      } else if(button.id === "changeBirthdate"){
        nameInputBox.style.display = "none";
        surnameInputBox.style.display = "none";
        birthDateInputBox.style.display = "block";
        emailInputBox.style.display = "none";
        phoneInputBox.style.display = "none";
        addressInputBox.style.display = "none";

      }else if(button.id === "changeEmail"){
        nameInputBox.style.display = "none";
        surnameInputBox.style.display = "none";
        birthDateInputBox.style.display = "none";
        emailInputBox.style.display = "block";
        phoneInputBox.style.display = "none";
        addressInputBox.style.display = "none";
      
      }else if(button.id === "changePhone"){
        nameInputBox.style.display = "none";
        surnameInputBox.style.display = "none";
        birthDateInputBox.style.display = "none";
        emailInputBox.style.display = "none";
        phoneInputBox.style.display = "block";
        addressInputBox.style.display = "none";
      
      }else if(button.id === "changeAdress"){
        nameInputBox.style.display = "none";
        surnameInputBox.style.display = "none";
        birthDateInputBox.style.display = "none";
        emailInputBox.style.display = "none";
        phoneInputBox.style.display = "none";
        addressInputBox.style.display = "block";
      }
      })
  });

// envio dos novos dados para Local Storage e substituição na página:

let SubmitBtn = document.getElementById("formsubmit-btn");
function storeInput(){
  
SubmitBtn.addEventListener("click",function(event){
  event.preventDefault();
  NewObjectLocalStorage();
})

};

//guarda informações  no Local Storage:
//?? Quando eu fiz os if somente com (var.length > 1) ele não conseguiu reconhecer a propriedade length, por quê?
function NewObjectLocalStorage(){
  let NewUserName = document.getElementById("name").value;
  let NewUserSurname = document.getElementById("surname").value;
  let NewUserbirthDate = document.getElementById("birthdate").value;
  let NewUserPhone = document.getElementById("email").value;
  let NewUserEmail = document.getElementById("phone").value;
  let NewUserAddress = document.getElementById("adress").value;
  let anyInput = document.querySelectorAll(".personalInfo").value;
  
  if(NewUserName.trim().length > 1){
    localStorage.setItem(userNameKey, NewUserName);
  }

  if(NewUserSurname.trim().length > 1){
    localStorage.setItem(userSurnameKey , NewUserSurname);
  }

  if(NewUserbirthDate.trim().length > 1){
  localStorage.setItem(userBirthdateKey , NewUserbirthDate);
  }

  if(NewUserPhone.trim().length > 1){
  localStorage.setItem(userPhoneKey , NewUserPhone);
  }

  if(NewUserEmail.trim().length > 1){
  localStorage.setItem(userEmailKey , NewUserEmail);
  }

  if(NewUserAddress.trim().length > 1){
  localStorage.setItem(userAdressKey , NewUserAddress);
  }
  printNewProfileOnPage();
};

  //Para imprimir o dado novo na página:
function printNewProfileOnPage(){
  let showNewName = document.getElementById("standard-name");
  let newName = localStorage.getItem(userNameKey);
  showNewName.innerHTML = newName; 

  let showNewSurname = document.getElementById("standard-surname");
  let newSurname = localStorage.getItem(userSurnameKey);
  showNewSurname.innerHTML = newSurname; 
  
  let showNewBirthdate = document.getElementById("standard-birthdate");
  let newBirthdate = localStorage.getItem(userBirthdateKey);
  showNewBirthdate.innerHTML = newBirthdate; 
  
  let showNewPhone = document.getElementById("standard-phone");
  let newPhone = localStorage.getItem(userPhoneKey);
  showNewPhone.innerHTML = newPhone; 
  
  let showNewEmail = document.getElementById("standard-email");
  let newEmail = localStorage.getItem(userEmailKey);
  showNewEmail.innerHTML = newEmail; 
    
  let showNewAdress = document.getElementById("standard-adress");
  let newAdress = localStorage.getItem(userAdressKey);
  showNewAdress.innerHTML = newAdress; 
  }



  function hideInputArea(){
    nameInputBox.style.display = "none";
    surnameInputBox.style.display = "none";
    birthDateInputBox.style.display = "none";
    emailInputBox.style.display = "none";
    phoneInputBox.style.display = "none";
    addressInputBox.style.display = "none";
  };

