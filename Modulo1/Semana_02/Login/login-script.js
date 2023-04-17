/*Faça uma página de login que verifique se o login e a senha do usuário batem com um login e senha fictício (armazenados em um objeto). A página deve conter inputs e um botão para logar. Após o login, se as credenciais baterem com as fictícias deve-se imprimir ‘logado’, senão imprimir ‘credenciais incorretas’.*/

//CÓDIGO QUE FUNCIONA - INICIO
var fixedlogin = [{
          login : "Marianna",
          password : "Mari123",
          },
]

let storedLogin = fixedlogin[0].login;
let storedPassword = fixedlogin[0].password;

const form =  document.getElementById('myform');
const inputLogin = document.getElementById("userLogin");
const inputPassword = document.getElementById("userPassword");



const btnLogin = document.getElementById("btn-login");
btnLogin.addEventListener("click", function(event) {
     // prevenindo o comportamento padrão do botão
     event.preventDefault();
     checkInputs();
});

     function checkInputs(){

     if(storedLogin === inputLogin.value &&  storedPassword === inputPassword.value){
          setSuccessFor();
     }else{
          setErrorFor();  
          }
     };


function setSuccessFor(){
     window.alert ("You're now logged in.");
     window.location.href = "./loggedpage.html";
}

function setErrorFor(){
     window.alert ("Error trying to log in. Please enter a valid login/password and try again.");
}

//CÓDIGO QUE FUNCIONA - FIM





//perguntar sobre o uso de addEventListener, trim() e .value na declaração de variável
/*


const form =  document.getElementById('myform');
const inputLogin = document.getElementById("userLogin").value;
const inputPassword = document.getElementById("userPassword").value;

//aqui entendi o erro. o eventlistener deve estar atrelado ao botáro e nao ao form neste caso.
form.addEventListener("submit", (e) => {
     e.preventDefault();
     checkInputs();
});


function checkInputs(){
     const inputLoginValue = inputLogin.trim();
     const inputPasswordValue = inputPassword.trim();

// por que o .value não pode ser lá em cima e sim nesta próxima linha como "inputLogin.value"?
     if(storedLogin === inputLoginValue&&  storedPassword === inputPasswordValue){
          setSuccessFor();
     }else{
          setErrorFor();  
          }
     }



function setSuccessFor(){
     window.alert ("You're now logged in.");
     //window.location.href = "http://example.com/new_url";
}

function setErrorFor(){
     window.alert ("Error trying to log in. Please enter a valid login/password and try again.");
}

*/


//localStorage.setItem('server', 'userlogin');
//localStorage.setItem('server', 'userPassword');*/
