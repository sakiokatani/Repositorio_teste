let singleBread = document.getElementById("inputprice");
let breadQuantity = document.getElementById("inputquantity");
let submitbtn = document.getElementById("submitbtn");
let texto = document.getElementById("information");
let output = document.getElementById("tableOutput");


function CalculatePrices(){
    let totalPrice = 0;
    let showPrice = "";
    
    

    for(i = 1; i >= 0 && i < 51; i++){
        let single = parseFloat(singleBread.value);
        //console.log(i) = para confirmar que o contador funciona
        totalPrice = (single * i).toFixed(2);
        //primeiro Parse, depois numero de casas decimais como propriedade. Apllicar pasedValue.toFixed(x)
        // console.log(totalPrice);
        //tentei price = exemplo*i; totalPrice += price; mas += é uma forma curta de realizar a operação totalPrice = totalPrice+price;

        //aqui para quebra de linha no innerHTML, preciso da tag <br> ao invés de um \n(\n é para console)
        showPrice += (i) + "un - R$" + (totalPrice) + "<br>" + "\n";
    }
        
    return showPrice;
    };

// console.log(CalculatePrices());


function textoh4(){
    let informe = "";
    informe += "Segue a tabela de preços para o pãozinho no valor unitário de R$" + parseFloat(singleBread.value).toFixed(2);
    
    return informe;
}

submitbtn.addEventListener("click", function(e){
    e.preventDefault();
    let intro = textoh4();
    let calculate = CalculatePrices();
    // a variável precisava estar dentro do eventlistener para que a operação funcionasse corretamente. SEmpre que a função retorna uma String, declarar a variável dentro do addeventlistener e não fora.
    texto.innerHTML = intro ;
    output.innerHTML = calculate;
    console.log(calculate);
})
