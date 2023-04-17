// Use uma sintaxe que chama uma função em intervalos de tempo definidos e faça ela verificar se chegou uma data, se essa data chegou, ela deve imprimir feliz aniversário. Se não chegou, ela deve dizer quantos dias faltam para chegar a data.
// Para facilitar o cálculo de dias, pode se basear no algorítimo abaixo.


// const d1  = '2021-10-05';
// const d2    = '2021-11-12';
// const diffInMs   = new Date(d2) - new Date(d1)
// const diffInDays = diffInMs / (1000  60  60 * 24);
// console.log(diffInDays) // 38


const d1  = '2021-10-05';
const d2    = '2021-11-12';
const diffInMs   = new Date(d2) - new Date(d1)
// console.log(diffInMs)
const diffInDays = diffInMs / ((1000 * 60)*( 60 * 24));
// console.log(diffInDays) // 38
let insertBirthday = document.getElementById("insertBirthday");
let submit = document.getElementById("submit");

function getCurrentDate() {
    const now = new Date();
    let timezoneOffset = now.getTimezoneOffset() * 60 * 1000; // convert minutes to milliseconds
    let adjustedNow = new Date(now.getTime() + timezoneOffset);
    const year = adjustedNow .getFullYear();
    const month = adjustedNow .getMonth() + 1;
    const day = adjustedNow .getDate();
    return `${day}/${month}/${year}`;
  }

  const currentDate = getCurrentDate();

console.log(currentDate);

function getUserBirthday() {
    let birthday = new Date(insertBirthday.value);
    let timezoneOffset = birthday.getTimezoneOffset() * 60 * 1000; // convert minutes to milliseconds
    let adjustedBirthday = new Date(birthday.getTime() + timezoneOffset);
    let year = adjustedBirthday.getFullYear();
    let month = adjustedBirthday.getMonth() + 1;
    let day = adjustedBirthday.getDate();
    return `${day}/${month}/${year}`;
  }

  let birthday = getUserBirthday();



  submit.addEventListener("click", function(e){
    
    e.preventDefault();
    console.log("button is working");
    let userBirthday = getUserBirthday() ;
    let counter = calculateCountdown();
    
    console.log(userBirthday);
    if(userBirthday === currentDate){
       
      window.alert("Today is your birthday!");
    }
    else if(counter === 1){
        window.alert("Tomorrow is your bithday!");
    }
    else{
        window.alert(`${counter} day until your birthday!`)
    }
  });

  function calculateCountdown(){
    const diffInMs   = new Date(insertBirthday.value) - new Date();
    // console.log(diffInMs);
    const diffInDays = Math.ceil(diffInMs / ((1000 * 60)*( 60 * 24)));
    // console.log(diffInDays);
    return diffInDays;
}

// console.log(calculateCountdown())