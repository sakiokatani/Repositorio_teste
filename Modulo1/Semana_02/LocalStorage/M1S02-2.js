//Utilizar a página de login para criar um sistema de autenticação utilizando localstorage. Quando o usuário logar, salvar as credenciais localmente. Se as credenciais existirem localmente, ir para uma página com um botão de logout, se elas não existirem, ir para a página de login.


const form =  document.getElementById('myform');
const inputLogin = document.getElementById("userLogin");
const inputPassword = document.getElementById("userPassword");


//colocar os inputs no local storage ao clicar - colocar função de local storage dentro de onclick//


const btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click", function(event) {
     // prevenindo o comportamento padrão do botão
     event.preventDefault();
     checkInputs();
});

     function checkInputs(){

     if((inputLogin.value.length > 4 ) && (inputPassword.value.length > 4)){
          setSuccessFor();
     }else{
          setErrorFor();  
          }
     };


function setSuccessFor(){
     localStorage.setItem('user', inputLogin.value);
     localStorage.setItem('password', inputPassword.value);
     window.alert ("You're now logged in.");
     redirect();
}
     


function setErrorFor(){
     window.alert ("Error trying to log in. Please enter a valid login/password and try again.");
}

function redirect(){
     var storedUser = localStorage.getItem('user');
     var storedPassword = localStorage.getItem('password');

if (storedUser === null || storedPassword === null){
     window.location.href = "./M1S02-2.html";
}else{
     window.location.href = "./logoutpage.html"
}};


let btnLogout = document.getElementById("btn-logout");
     btnLogout.addEventListener("click", function(newevent){
          newevent.preventDefault();
          window.location.href = "./M1S02-2.html";
});

