// O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências. Faça um programa que implemente uma caixa registradora rudimentar. O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. Um valor zero deve ser informado pelo operador para indicar o final da compra. O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor do troco. Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra. A saída deve ser conforme o exemplo abaixo:
// Lojas Tabajara
// Produto 1: R$ 2.20
// Produto 2: R$ 5.80
// Produto 3: R$ 0
// Total: R$ 9.00
// Dinheiro: R$ 20.00
// Troco: R$ 11.00


// Preciso de uma forma de ir adicionando objetos um array
// depois, captador do localstorage e imprimir na tela como output
// valor 0 === fim da operação
// troco = valor dinheiro - total


//eu preciso de um loop pro input ser colocado em um array => preciso de uma variável input que seja verdadeiro ou falso
// let arrayValorProdutos = [];//colocar elementos com push toda vez que input for true
// trabalhar com a array que armazenou os inputs usando forEach(pensar em funcao de soma do DevStart)
//criar uma variável para or resultado da soma
// criar uma variável tipo input pro valor recebido
//fazer cálculo do troco com subtração


//variáveis GLOBAIS que eu preciso:
let valorDoProduto= document.getElementById("valorProduto");
//A variável valor não pode ser declarada aqui pq se não ela sempre vai inicializar no zero para todas as funções e não vai rodar createArrayValor se inicializasse em 0 para o botão ou o enter
let submitbtn = document.getElementById("enviarValor");
let nomeDoProduto = document.getElementById("nomeProduto");
    nomeDoProduto.value = "Produto 1";
    nomeDoProduto.readOnly = true;
let fieldTotal = document.getElementById("Total");
    fieldTotal.value = parseFloat(0).toFixed(2);
    fieldTotal.readOnly = true;
let fieldmoneyReceived = document.getElementById("valorRecebido");
let hiddenfield= document.getElementById("recebimentoInvalido");
let fieldChange = document.getElementById("valorTroco");
    fieldChange.value = parseFloat(0).toFixed(2);
    fieldChange.readOnly = true;

let inputReceived = false; // pode-se criar uma variável para dar trigger em algo quando o valor é modificado;
let arrayProdutos = [];//para colocar elementos com .push()
let arrayValorProdutos = [];  //para colocar elementos com .push()

let output = document.getElementById("imprimirConteudo");
let outputTotal = document.getElementById("imprimirTotal");
    outputTotal.innerHTML = "Total: R$0.00"
let outputMoney = document.getElementById("imprimirDinheiro");
    outputMoney.innerHTML = "Dinehiro: R$0.00"
    
let outputChange = document.getElementById("imprimirTroco");
    outputChange.innerHTML = "Troco: R$0.00"


//Envio de input prelo usuário:
//valor do Produto:
// submitbtn.addEventListener("click", function(e){
//     e.preventDefault();
//     if(valorDoProduto.value != ''){ //quando não há input, é uma string vazia, não null
//         inputReceived = true;
//         console.log("working");
//         todasAsFuncoes();
//     }
//     else{
//         console.log("Por favor, insira um valor válido");
//         }
// })

valorDoProduto.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
     if (valorDoProduto.value != ''){
        inputReceived = true;
        todasAsFuncoes();
    }
    
    else {
        console.log("Por favor, insira um valor válido");
        }
    }
});

//valor do Dinheiro recebido:
fieldmoneyReceived.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        if (fieldmoneyReceived.value != ''){
            inputReceived = true;
            change();
            fieldmoneyReceived.disabled = true;
        }
       
        
    }

    else if(e.key === 0){
        valorDoProduto.addEventListener("keyup", function(e){
            if(e.key === Enter){
                endOfOperation()
            }
        })
}}
);


//vai fazer o push para o array enquanto input for verdadeiro, ou seja, sempre que apretar enter ou clicar submit com valor diferente de 0; aqui eu declar a variável valor, para encurtar, mas poderia usar valorDoProduto.value
function createReceipt() {
//criando um array de valores do produtos para depois poder somar
  if(valorDoProduto.value!= null && valorDoProduto.value !== "0" && valorDoProduto.value !== ""){
    arrayValorProdutos.push(valorDoProduto.value);
    console.log(arrayValorProdutos);
    let nomeDoItem = "Produto";
    let concatenados = [];
    
    for(let i = 0; i < arrayValorProdutos.length; i++){
        let numeroDoItem = i + 1;
        let concatenado = `${nomeDoItem} ${numeroDoItem}  : R$  ${arrayValorProdutos[i]}`;
        concatenados.push(concatenado);
    }
    
    let outputString = concatenados.join('<br>');
    output.innerHTML = outputString;
    console.log(outputString);
    }

    
    valorProduto.value = "";

    

}   


function sumTotal(){
    let soma = 0;
    arrayValorProdutos.forEach(function(item){
        if(parseFloat(item) !== 0){
        soma = soma + parseFloat(item);
        }
    })  
    fieldTotal.value = parseFloat(soma).toFixed(2);
    let totalToPrint =  `Total: R$ ${fieldTotal.value}`;
    outputTotal.innerHTML = totalToPrint;
    
 return soma;
}



function change(){
    let summedValue = sumTotal();
    // console.log(summedValue);
    let receivedValue = parseFloat(fieldmoneyReceived.value);
        if(receivedValue !== "0" && receivedValue > summedValue){
        let subtract = parseFloat(receivedValue) - parseFloat(summedValue);
    // console.log(subtract);
        fieldChange.value = parseFloat(subtract).toFixed(2);
        let moneyToPrint =  `Dinheiro: R$ ${fieldmoneyReceived.value}`;
        let changeToPrint =  `Troco: R$ ${fieldChange.value}`;
        outputChange.innerHTML = changeToPrint;
        outputMoney.innerHTML = moneyToPrint;
        return subtract;
        }

        else if(receivedValue === "0" || receivedValue < summedValue){
            hiddenfield.style.display = "block";
            hiddenfield.innerHTML = "Favor inserir um valor maior que o valor da compra."
        }
}

//Adicionando eventListener para o documento como um todo:
// 1) Para finalizar a operação quando apertar 0 e enter;

document.addEventListener("keydown", function(e){
        
    if(e.key === "0"){
        document.addEventListener("keyup", function(e){
        if (e.key === "-") {
        document.addEventListener("keyup", function(e){
        if(e.key === "Enter"){
        endOfOperation()
        }
        })}})}});

    
    // 2) Para poder voltar a editar quando aperta sequência 0, 1 e Enter;
 document.addEventListener("keydown", function(e){
    if(e.key === "0"){
        document.addEventListener("keyup", function(e){
        if (e.key === "+"){
            document.addEventListener("keyup", function(e){
                if(e.key === "Enter"){
                fieldmoneyReceived.disabled = false;
                valorDoProduto.disabled = false;
                hiddenfield.style.display = "none";
                    }})
            }
            })
        }
    })

//juntando as funções em uma função para chamar todos de uma vez:
function todasAsFuncoes(){
    createReceipt();
    sumTotal();
    change();
    
 }

//finalizando todas as operações:
function endOfOperation(){
    createReceipt();
    sumTotal();
    change();
    fieldmoneyReceived.disabled = true;
    // fieldmoneyReceived.value = fieldmoneyReceived.value;
    valorDoProduto.disabled = true;
    // valorDoProduto.value = valorDoProduto.value;
}