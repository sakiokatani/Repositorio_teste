var studentsData = [
    {
    name: "Marianna dos Santos Trindade",
    age: 30,
    group: "3A",
    mathScore1: 5.85,
    PhysicsScore1: 8.75,
    },
    
    {
    name: "Caio Schwarz",
    age: 32,
    group: "2B",
    mathScore1: 8.2,
    PhysicsScore1: 9,
    },
                
    {
    name: "Carla Daniele Da Silva Soares",
    age: 18,
    group: "3B",
    mathScore1: 4.75,
    PhysicsScore1: 6.85,
    },
                   
              
    {
    name: "Rafael Pelucci de Almeida",
    age: 21,
    group: "2B",
    mathScore1: 8.9,
    PhysicsScore1: 7.5,
    },
                   
                
    {
    name: "Amanda Rodrigues Pedra",
    age: 27,
    group: "2A",
    mathScore1: 7.85,
    PhysicsScore1: 9,
    },
    
    {
    name: "Gabriela Romero Schiavon",
    age: 22,
    group: "2B",
    mathScore1: 9.55,
    PhysicsScore1: 9.2,
    },
    ];

let index = 0;
let lastIndex = studentsData.length -1;
let length = studentsData.length;
let profile = [];
// O .filter(função) retorna((=>)) todos os objetos contendo aquele determinado elemento.
/*let retrievedNames = studentsData.filter(studentsData => (studentsData.name));
console.log(retrievedNames);*/

// Já o .map() filtra os elementos dos objetos, criando um novo array contendo apenas aqueles elementos com a propriedade especificada;

console.log("Perfil dos estudantes:")
function studentsProfile(profile){
    profile = 
    studentsData.forEach(studentsData => console.log(
    ("Nome: " + `${studentsData.name}`),("\n"), 
    ("Idade: " + `${studentsData.age}`), ("\n"),
    ("Grupo: " + `${studentsData.group}`),("\n"), 
    ("Matemática - nota 1: " + `${studentsData.mathScore1}`),("\n"), 
    ("Física - nota 2: " + `${studentsData.PhysicsScore1}`)))
return profile;
};
console.log(studentsProfile(profile));
//document.getElementById("list").innerHTML = studentsProfile(profile);


console.log("\n");



//let nameList = studentsData.map( studentsData => 'nome:' + `${studentsData.name}`);
let mathScores = studentsData.map(studentsData =>`${studentsData.mathScore1}`);

//console.log(nameList);
//console.log("All Math scores:" + mathScores);
console.log("Média geral da prova 1 de Matemática:")

function sumMathScore(mathScores){
let sumScore = 0;
mathScores.forEach(function(singleScore){
    sumScore = parseFloat(sumScore) + parseFloat(singleScore);
    //console.log(sumScore); 
    })
let average = 0;
average = (parseFloat(sumScore)/parseFloat(length)).toFixed(2);
        return average;
    }
console.log(sumMathScore(mathScores));

console.log("\n");

 studentsData.forEach(function(status){    
     while(index < length){
        let score = parseFloat(studentsData[index].mathScore1)
        if(score >= 6){
            console.log(`Aluno(a)${studentsData[index].name} aprovado(a) com nota ${studentsData[index].mathScore1}.`);
         } else{
            console.log(`Aluno(a) ${studentsData[index].name} reprovado(a) com nota ${studentsData[index].mathScore1}.`);
        }
        index ++;     
     }
     return status;
 });


