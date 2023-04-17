let numeroUsuario = document.getElementById('phoneNumber');
let userMessage = document.getElementById('message');
let mensagemErro = document.getElementById('mensagemErro');

function gerarLink(){
const  linkOriginal = 'api.whatsapp.com/send?phone=SeuNúmero&text=SuaMensagem';
const mensagemNova = userMessage.value.replace("", "20%");
const linkFormatado =  linkOriginal.replace('SuaMensagem', mensagemNova).replace("SeuNúmero", numeroUsuario.value);
const linkFinal = encodeURI(linkFormatado);
return linkFinal
}

;

userMessage.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        let elementoDoLink = document.getElementById('novo-link-whats');
    if( userMessage.value !== '' && numeroUsuario.value !== ""){
        const link = gerarLink();
        
        elementoDoLink.setAttribute("href", link);
        mensagemErro.innerHTML = '';
        elementoDoLink.innerHTML = gerarLink();
    }
    if(userMessage.value === ''|| numeroUsuario.value === ''){
        mensagem1 = "Favor preencher todos os campos para prosseguir"
        elementoDoLink.innerHTML ='';
        mensagemErro.innerHTML = mensagem1;
    }
    }
})

numeroUsuario.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        let elementoDoLink = document.getElementById('novo-link-whats');
        if(  userMessage.value !== '' && numeroUsuario.value !== ''){
            const link = gerarLink();
            
            elementoDoLink.setAttribute("href", link);
            mensagemErro.innerHTML = '';
            elementoDoLink.innerHTML = gerarLink();
        }
        if(userMessage.value === '' || numeroUsuario.value === ''){
            mensagem1 = "Favor preencher todos os campos para prosseguir"
            elementoDoLink.innerHTML ='';
            mensagemErro.innerHTML = mensagem1;
        }
        }
    })