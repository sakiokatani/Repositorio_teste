

const usuarios = ['Pedro','José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria'];
const frutas = [ 'Banana', 'Morango', 'Maçã', 'Uva', 'Pêra' , 'Laranja'];

function getByIndex(){
    let arrayfruits =[]
    let newArray=[];
    
    
    let fruitByIndex;
        for (let j = frutas.length -1;  j >= 0; j--){     
            fruitByIndex = frutas[j];
            // frutas.length -1 é igual a j inicial, então começará a contagem do 0. Quando j estiver em 4, 5-4=1 e assim por diante
            newArray.push(`${usuarios[frutas.length-1 - j]} -${fruitByIndex}`)
}
console.log(newArray);
}

getByIndex();
    