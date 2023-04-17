const dados = [

{nome: "luis", idade: 26},

{nome: "norma", idade: 16},

{nome: "daiana", idade: 26},

{nome: "jorge", idade: 16},

{nome: "kauan", idade: 16},

{nome: "charles", idade: 26},

{nome: "marco", idade: 16},

{nome: "bruno", idade: 16}

]

window.addEventListener('load', separarMaioresDeMenores);

function separarMaioresDeMenores(){
    let arrayMaioresDeIdade = [];
    let arrayMenoresDeIdade = [];
    for(let j = 0; j < dados.length; j++){
        
        if(dados[j].idade > 18){
            arrayMaioresDeIdade.push(dados[j].nome);
        }
        if(dados[j].idade < 18){
            arrayMenoresDeIdade.push(dados[j].nome);
        }
    }
    console.log('usuários maiores de idade: ' + arrayMaioresDeIdade);
    console.log('usuários menores de idade: ' + arrayMenoresDeIdade);
    }


