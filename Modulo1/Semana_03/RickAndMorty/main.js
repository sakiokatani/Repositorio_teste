
let seriesCurrentStatus = 'Ongoing';

//Card content variables:

const cardContent = document.getElementById('content');
const characterDiv = document.getElementById('characterDiv');
let cardNumber = document.getElementById('cardNumber');
let number = document.getElementById('number')
let textSection = document.getElementById('textSection');

let userInput = document.getElementById('userInput');
    
let userFirstInput = document.getElementById('firstUserInput');
let nameHeading = document.getElementById('nameHeading');
    
let charStatus = document.getElementById('status');
let charSpecies = document.getElementById('species');
let charGender = document.getElementById('gender');
let charOrigin = document.getElementById('origin');
let charLocation = document.getElementById('location');
let seriesImgElement = document.getElementById('seriesImgElement');
let charImgElement = document.getElementById('charImgElement');
let transitionElement = document.getElementById('transition');
let imgSection = document.getElementById('imgSection');
let imgSection2 = document.getElementById('imgSection2');
let maskElement = document.getElementById('maskElement');


// standardCard();

userInput.addEventListener('keyup', (e) =>{
    e.preventDefault();
    console.log('pressed')
    if(e.key === 'Enter'){
        if(userInput.value !== '0' && userInput.value !== ''){
            
            transition();
            getCharacterData();
        }else if(userInput.value === '0' || userInput.value === ''){
            transition();
            standardCard();
        }
    }
})

function transition(){
    cardNumber.innerHTML = userInput.value;  
    number.appendChild(cardNumber);
    cardContent.appendChild(number);
    seriesImgElement.style.opacity=0;
                
}

function getCharacterData(){
    
    
    // maskElement.src = "./portal-svg.svg"
    fetch(`https://rickandmortyapi.com/api/character/${userInput.value}`)
    .then((response) => response.json())
    .then((data) =>{
        console.log(data)
        // characterDiv.classList.add("character-card");
        nameHeading.innerHTML = `<b>${data.name}</b>`;
        charStatus.innerHTML = `<b>Status:</b> ${data.status}`;
        charSpecies.innerHTML = `<b>Species:</b> ${data.species}`;
        charGender.innerHTML = `<b>Gender:</b> ${data.gender}`;
        charOrigin.innerHTML = `<b>Origin:</b> ${data.origin.name}`;
        charLocation.innerHTML = `<b>Location:</b> ${data.location.name}`;
        charImgElement.src = data.image;
        
        
        

         // Colocar no arquivo HTML com appendChild todos os innerHTML que já criei
         imgSection.appendChild(charImgElement);
         imgSection.appendChild(maskElement);
         textSection.appendChild(nameHeading);
         textSection.appendChild(charStatus);
         textSection.appendChild(charSpecies);
         textSection.appendChild(charGender);
         textSection.appendChild(charOrigin);
         textSection.appendChild(charLocation);
         
         imgSection.style.backgroundImage = charImgElement;

         cardContent.appendChild(imgSection);
         cardContent.appendChild(textSection)
         cardContent.appendChild(number);
        
    })
    .catch((error)=> console.error(error));
    userInput.value = '';
}




//for the standard card content:
function standardCard(){
    seriesImgElement.style.opacity=1;
    nameHeading.innerHTML = "<b>Rick and Morty</b>"
    charStatus.innerHTML = `<b>Status:</b> ${seriesCurrentStatus}`;
    charSpecies.innerHTML = '<b>Enter any number';
    charGender.innerHTML = '<b>from 1 to 800 </b>';
    charOrigin.innerHTML = '<b>to see a character card</b>';
    seriesImgElement.src = "https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png";
    cardNumber.innerHTML = "0";
    // Colocar no arquivo HTML com appendChild todos os innerHTML que já criei
    
    
    
    textSection.appendChild(seriesnameHeading);
    textSection.appendChild(nameHeading);
    textSection.appendChild(charStatus);
    textSection.appendChild(charSpecies);
    textSection.appendChild(charGender);
    textSection.appendChild(charOrigin);
    textSection.appendChild(userInput);
    
    imgSection.appendChild(seriesImgElement);
    
    number.appendChild(cardNumber);
    
    
    // imgSection2.style.opacity = 0;
    cardContent.appendChild(imgSection);
    cardContent.appendChild(textSection)
    cardContent.appendChild(number);

    userInput.value = '';
}


const initialCard = standardCard();
const characterCard = getCharacterData();
