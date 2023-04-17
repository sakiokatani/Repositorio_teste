// Faça uma lista de tarefas diárias (strings), e crie 4 funções diferentes.

// Função que busca se a tarefa existe na lista.
// Função que altera um item da lista.
// Função que deleta um item da lista
// Função que adiciona um item na lista

let toDoList = ["lavar a louça", "lavar as roupas", "fazer almoço", "estudar"];

console.log(toDoList);
// Para saber se a tarefa existe
console.log(toDoList.includes("lavar a louça"));

//Para alterar um item da lista



//Para deletar um item da lista
toDoList.splice(2, 1);
console.log(toDoList);
toDoList.pop();
console.log(toDoList);

//Para adicionar um item no array(final, para inicio colocamos com unshift)
toDoList.push("fazer exercício físico");
console.log(toDoList);


// toDoList.("fazer almoço")

