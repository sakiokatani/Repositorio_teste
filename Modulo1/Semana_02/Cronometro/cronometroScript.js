//Crie um cronômetro que seja executado por um botão, conte 10 segundos, e no fim imprima um texto: 'Seu tempo acabou!! Tente novamente!!'.

var remainingTime = 10;
var interval; 

btnActivate = document.getElementById("activateStopwatch");
btnActivate.addEventListener("click", activateStopwatch);

//Precisa da função que inicie a cadeia de funções para o .addEventListener funcionar?
function activateStopwatch(){
    startTimer();
}

//Tenho que usar setInterval para que a função updateTimer seja executada a cada um segundo quando starTimer é ativada:
function startTimer(){
interval = setInterval(updateTimer,1000);
//verificando se está sendo lido:
// console.log("starting timer");
}

function updateTimer(){
    if(remainingTime <= 0){
        console.log("updating timer");
        stopTimer();
    }
    else{
        document.getElementById("remainingTimeLabel").innerHTML = "Te restam " + remainingTime + " segundos."
        //funciona com a mesma lógica do contador completo, mas posso escrever assim quando a função que eu colocaria aqui só faz um cálculo(nesse caso, o -1 a cada iteração). É a mesma coisa que escrever "
                //for (var i = 0; i < 10; i++) {
                // console.log("Time remaining: " + remainingTime);
                // remainingTime--;", 
        //mas de forma simplificada
        remainingTime --;
    }
}

function stopTimer(){
    console.log("Stopping Timer")
    clearInterval(interval);
    document.getElementById("remainingTimeLabel").innerHTML = "Seu tempo acabou!! Tente novamente!!";
}

