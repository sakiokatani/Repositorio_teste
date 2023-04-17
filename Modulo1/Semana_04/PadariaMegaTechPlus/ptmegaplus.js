// O seu Manoel gostou do último aplicativo e agora quer inovar.

// Ele quer que você construa a aplicação utilizando orientação a objetos.

// Construa uma classe chamada CaixaRegistradora

// Defina um atributo que armazene vários produtos no estoque contendo os seguintes campos:[{codigoBarra:number;preco:number;nome:string;}]

// Defina um método no qual o seu Manoel consiga adicionar novos produtos no estoque. Esse método recebe os mesmos campos do produto, e todos eles são obrigatórios.

// Defina um método que inicie o atendimento ao cliente, você deve passar o nome do cliente para iniciar.

// Defina um método que receba codigoBarra: number; e quantidade: number; para o seu Manoel conseguir adicionar itens na caixa registradora. **Importante: A aplicação só poderá adicionar itens na caixa, se o código de barra dele existir.

// Defina um método que você consiga verificar o valor total da conta do cliente.

// Defina um método fecharConta, no qual você passa o dinheiro e ele calcula o troco e zera a caixa registradora.




//preciso disso aqui pra que as perguntas apareçam no console. é padrão
// depois para chamar preciso de readline.question para perguntas da seguinte forma: readline.question ("pergunta", (parâmetro)=>{...})
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  const fs = require('fs');



const listaProdutos = [];

class CaixaRegistradora{ 
    static DadosDoProduto = class{
        // codigoBarra: number;
        // preco:number;
        // nome: string;

        constructor(codigoBarra, preco, nome){
            this.codigoBarra = codigoBarra;
            this.preco = preco;
            this.nome = nome;
        }
    }
    
    armazenarDadosEstoque(nome, codigoBarra, preco) {
        const produto = new CaixaRegistradora.DadosDoProduto(codigoBarra, preco, nome);
        listaProdutos.push(produto);
    }
    

    iniciarAtendimentoCliente(){
        readline.question('Favor inserir o nome do cliente: ', (nomeCliente) => {
            if(nomeCliente !== '' && nomeCliente !== null && typeof nomeCliente !== 'String' ){
            console.log(`Iniciando atendimento de ${nomeCliente}`);
            this.adicionarItensNota();
            }else{
                console.log('Nome inválido.')
                this.iniciarAtendimentoCliente();
            }
          });
}

    adicionarItensNota() {
        readline.question('Insira o código de barras:', (codigoBarra) =>{
            console.log(`Cód. de Barras: ${codigoBarra}`)
        readline.question('Insira o preço:', (preco) =>{
            if(!isNaN(preco)){
            console.log(`Preço: ${preco}`)
            readline.question('Insira o nome do Produto:', (nomeProduto) =>{
            console.log(`Produto: ${nomeProduto}`)
            loops();
            const produto = {codigoBarra, preco, nomeProduto};
            listaProdutos.push(produto)
               
            })
            }else{
                console.log("Insira um valor válido.")
                this.adicionarItensNota();
            }
         })}
                        
                    )}
    valorTotal() {
        let valorTotal = 0;
        listaProdutos.forEach((item) => {
            //eu ainda não entendi desestruturação de objetos. Pegar para estudar depois
        const { preco } = item;
        //incrementar valor total com o preço
        valorTotal += parseFloat(preco);
        });
        console.log(`O valor total da compra é R$ ${valorTotal}`);
        }      
    };
        
    

const caixa = new CaixaRegistradora;

function loops(){
    readline.question("Deseja adicionar mais produtos? (s/n)", (resposta) => {
      if(resposta.toLowerCase() === 's'){
        caixa.adicionarItensNota();
      }else if (resposta.toLowerCase() === 'n'){
        console.log(listaProdutos);
        caixa.valorTotal();
        readline.close();
      }
    });
  };

 

function callMethods(){

    const atendimento = caixa.iniciarAtendimentoCliente()

    if(!atendimento){
        caixa.iniciarAtendimentoCliente()
    }else{
        adicionarItensNota();
    }
}


 
callMethods();



 caixa.armazenarDadosEstoque("banana", 1234, 2.5);
 caixa.armazenarDadosEstoque("maçã", 2341, 2.5);
 caixa.armazenarDadosEstoque("morango", 3412, 2.5);
 caixa.armazenarDadosEstoque("uva", 4123, 2.5);

 console.log(listaProdutos);