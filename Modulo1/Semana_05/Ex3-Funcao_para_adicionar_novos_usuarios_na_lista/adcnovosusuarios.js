
let users = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];

let newuser = document.getElementById('newuser');
let submitAction = document.getElementById('submit');

//Trazer o input to usuário

newuser.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        includeNewUser();
    }
    }
)


// Transformar tudo em lower case para facilitar verificação
//fazer um novo array com .map(), aplicando toLowerCase para cada item
let lowerCaseUsers = users.map(user => user.toLowerCase());

let lowerCaseNewUser = newuser.value.toLowerCase().trim();
        // console.log(lowerCaseNewUser);
function includeNewUser(){
    
    if (newuser.value !== '' && newuser.value !== null){
        if(lowerCaseUsers.includes(lowerCaseNewUser)){
        console.log("Este nome de usuário já existe. Favor inserir um usuário que ainda não existe ou prosseguir com login");
        }

        else if (!lowerCaseUsers.includes(lowerCaseNewUser)){
        users += "," + newuser.value;
        console.log(users);
        }
    }

    if(typeof newuser.value !== 'string'){
    console.log("Favor inserir um valor válido")
    }
    
    else if(newuser.value === ''){
    console.log("Favor inserir um usuário para prosseguir")
    }
    newuser.value = "";
}
