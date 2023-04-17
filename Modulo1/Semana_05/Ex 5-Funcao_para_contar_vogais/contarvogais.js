
let stringUsuario = "Eichhünchen"; 
let vowels = ['a', 'i', 'u', 'e', 'o', 'à', 'á', 'ä', 'í', 'ú', 'ü', 'ú', 'é', 'ê', 'ë', 'ó', 'ô','ö'];
let inputValid = false;



if( typeof stringUsuario !== 'string'){
    console.log("Favor inserir um dado válido")
}

if (typeof stringUsuario === 'string' && stringUsuario !== ''){
    inputValid = true;
    countVowels();
}

function countVowels(){
    vogais = [];
    for(i = 0; i < stringUsuario.length; i++){
        let letter = stringUsuario[i].toLowerCase();
        let vowel = vowels[i]
    if(vowels.includes(letter)){      
    vogais.push(letter);  
    }
}
    if(vogais.length === 0){
        console.log("Não há vogais na palavra ou frase inserida")
    
    }
    else{
        console.log(vogais.length);
    }
    }
    
    
    

