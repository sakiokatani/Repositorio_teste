// Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo

// Eu preciso de uma tabuada. Então, preciso de:
// 1) um multiplicand inserido pelo usuário => <input type = "number"></input> no HTML;
// 2) pra ser chamadopara o javascript, ele precisa ser chamado por getElementById;
// 3) o submit button não pode começar a duncionar antes de ser clicado ou antes de outras funções rodarem;
// 4) eu preciso de um contador de 0 a 10 para o multiplier;
// 5) o produto precisa ser o multiplicand*multiplier;
// 6) O resultado precisa ser mostrado na página web, então preciso .innerHTML que tenha atribuído o resultado;

// Declarar as variáveis de escopo global que vou utilizar antes de tudo
let i= 0;
let outputElement = document.getElementById("output");
let header = document.getElementById("tabuadaDesejada");


// let printOnPage = "";
    
var multiplier = function(result){
    
    //puxar do <input> do HTML a informação dada pelo usuário;
    //SE var multiplicand fosse declarada fora da função, ela não se atualizaria a cada loop. Assim, as equações seguintes a ela
    //como por exemplo o próprio result não consegue atualizar o dado, não imprimindo o multiplicand em suas iterações;
    var multiplicand = document.getElementById("inputNumber").value;
    var multiply =0;
    // resultado deverár ser uma string
    result = "";
    header.textContent = "Tabuada de " +  multiplicand + ":";
    
        for(i = 0; i >= 0 && i < 11; i++){
            //como substituir console.log? Posso fazer uma variável com atribuição de valor de string e 
        multiply = multiplicand + " x " + i + " = " + (multiplicand * i);

            // += concatena o resultado de cada iteração, não apagando o resultado da equação feita anteriormente como acontece com um simples assignment(=)
        result += multiply + "<br></br>";    
    }
        // eu preciso que o .innerHTML esteja dentro da função para que imprima a cada iteração. Se estiver fora, ora a variável result(escopo local) não será válida, ora outputElement.HTML retornará a função multiplier escrita, não seu resultado.
        // eu poderia fazer uma variável para a variável multiplier ser atribuída, mas isso prolonga o código e necessitaria de uma outra função somente com o innerHTML a ser chamada dentro da função multiplier para que fosse impresso na ordem correta.
    outputElement.innerHTML = result;    
    return result;
}


const submitbtn =  document.getElementById("submit");
submitbtn.addEventListener("click", multiplier);

