// Utilizando a lista: ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria', 'Luis’, 'Danilo’, 'José’]

// Através de lógica de programação, remova os duplicados e exiba quais nomes que estavam duplicados e a nova lista sem eles.

// Exemplo:

// José, Danilo, ['Pedro', ‘José', ‘Aderbal', ‘Danilo', 'Luisa', 'Vitoria', 'Luis’]

// ‌

// Regra 1: Não é necessário nenhum envio de dados.

// Regra 2: Deve remover somente os duplicados, e deixar uma lista com os items únicos

// Regra 3: Exibir o resultado dos deletados conforme no exemplo. Printar os dados que foram deletados e exibir a lista sem duplicados.

const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José'];


function hasDuplicate(lista){
    let duplicates = []
    for (let i = 0; i < lista.length; i++){
        if (lista.indexOf(lista[i]) !== lista.lastIndexOf(lista[i]) && !duplicates.includes(lista[i])){
            duplicates.push(lista[i]);
        }
    }
    return duplicates;

}
nomesDuplicados = hasDuplicate(lista);
console.log(nomesDuplicados);

// criar uma função que possa pegar os nomes duplicados pelo índice e deletar
function deleteDuplicates(lista, nomesDuplicados){
    let noDuplicates =[];
    // nomesDuplicados.forEach(item => {
        for(j = 0; j < lista.length; j++){
        // se nomesDuplicados incluir o item da lista sobre o qualestá iterando
        if (nomesDuplicados.includes(lista[j])){
            //removo o item j. j é o índice, então eu uso como o índice que quero remover
            lista.splice(j , 1);
            // preciso reduzir o j, pois ao remover um item da lista, ele precisa "voltar uma casa" para fazer um nova verificação
            j--;
           
        }
        
        }
    // incrementando o array que o splice criou, após o loop terminar, com os valores do array repetido. Poderia talvez fazer com .push()?
    //aqui estou trandormando em string, pra manter como array, preciso usar .concat();
    // noDuplicates = `${lista},${nomesDuplicados}`;
    noDuplicates = lista.concat(nomesDuplicados);
    // console.log(noDuplicates)
    newArray = {sting: nomesDuplicados.join(","), array: noDuplicates};
    return newArray;
}

console.log(deleteDuplicates(lista, nomesDuplicados));

// agora preciso criar uma função para colocar de volta os nomes repetidos
//será que não dá pra colocar na mesma função de cima?
//Consigo,desde que declare um array vazio antes e incremente ele com a stirng


//FUNCIONA< MAS NAO PRA TODOS DE UMA VEZ - PRIMEIRA SOLUÇÃO
// function duplicado(nomeduplicado){
// for(let i = 0; i < lista.length; i++){
//     let novaLista = [];
    
//     nome = lista[i];
//     if (nome === nome1 && nome1 === true){
//         let getNome1Index = lista.indexOf(nomeduplicado);
//         console.log(lista[getNome1Index]);
        
//         console.log(getNome1Index);

//         novaLista = lista.filter(item => item !== nome1);
//         novaLista.push(nome1);
//         console.log(novaLista);
//         } 
            
//         // continue;
//     };

//     if(nome1 === false){
//         novaLista = lista;
//         console.log(novaLista);
//     }
// }

// duplicado('José');
// duplicado('Danilo');