// Crie uma lista com os RGs que estão em anexo.
// Utilizando as funções de array, busque na lista um usuário por seu username e imprima em tela.
// [AULA 1]

const users = [{
    "name": "Scenic Stream",
    "username": "Eladio66",
    "rating": 0.9,
    "favorites": 2,
    "visits": 10,
    "difficulty": 3,
    "terrain": 4,
    "size": "big",
    "created": "September 15, 2021",
    "updated": "November 25, 2022",
    "coords": "30.0795 111.6412"
  },{
    "name": "Indigo Shady Stream",
    "username": "Marian_Volkman10",
    "rating": 2.8,
    "favorites": 42,
    "visits": 504,
    "difficulty": 3,
    "terrain": 4,
    "size": "mini",
    "created": "December 21, 2022",
    "updated": "February 7, 2023",
    "coords": "40.4485 -76.4953"
  },{
    "name": "Historic Trail",
    "username": "Tabitha_Bosco",
    "rating": 3.5,
    "favorites": 21,
    "visits": 84,
    "difficulty": 3,
    "terrain": 3,
    "size": "mini",
    "created": "August 26, 2022",
    "updated": "November 2, 2022",
    "coords": "44.4780 10.7721"
  },{
    "name": "Old Footpath",
    "username": "Ford50",
    "rating": 3.8,
    "favorites": 23,
    "visits": 322,
    "difficulty": 1,
    "terrain": 1,
    "size": "small",
    "created": "December 10, 2021",
    "updated": "July 27, 2022",
    "coords": "15.3748 -25.0323"
  },
  {
    "name": "Viovar Historic Route",
    "username": "Soledad_Olson",
    "rating": 1.2,
    "favorites": 6,
    "visits": 6,
    "difficulty": 4,
    "terrain": 1,
    "size": "small",
    "created": "May 4, 2022",
    "updated": "June 13, 2022",
    "coords": "81.8303 33.4350"
  },
  
  {
    "name": "Orange Shady Footpath",
    "username": "Jarvis_Hackett",
    "rating": 3.1,
    "favorites": 31,
    "visits": 93,
    "difficulty": 4,
    "terrain": 2,
    "size": "large",
    "created": "June 20, 2022",
    "updated": "November 19, 2022",
    "coords": "-68.5221 -97.7478"
  },
  {
    "name": "Blue Stream",
    "username": "Jason.Kautzer80",
    "rating": 4.1,
    "favorites": 54,
    "visits": 432,
    "difficulty": 5,
    "terrain": 3,
    "size": "medium",
    "created": "August 27, 2022",
    "updated": "November 8, 2022",
    "coords": "-74.4389 146.7820"
  }
  ]

let barraBuscarUsuario = document.getElementById("barraDeBusca");
let alertMsg= document.getElementById("userProfile");
let imprimirMsg1 = document.createElement("ul");
let submitbtn = document.getElementById("submit");

let allUsersArray = users;
let lengthOfallUsersArray = allUsersArray.length;
console.log(allUsersArray);

let usernames = allUsersArray.map(user => user.username)
    
console.log(usernames);



//verificar se o usuário está incluso no cadastro de usuário;


// Encontrar username, não consigo encontrar com includes. Pq?
//  necessario colocar a função .trim() no getElementById;

submitbtn.addEventListener("click", function(userNameCheck){
    // e.preventDefalut();
    let inputtedName = barraBuscarUsuario.value.trim();
    userNameCheck = usernames.includes(inputtedName);
    ifExists(userNameCheck);
    
});


function ifExists(userNameCheck){
    if (userNameCheck === true){
    console.log("O usuário está cadastrado")
    let msg1 =  "O usuário está cadastrado. Seguem os dados: <br></br>" ;
    let usersIndex= allUsersArray.findIndex(user => user.username === barraBuscarUsuario.value.trim());
        console.log(usersIndex);
    allUsersArray.forEach(profile => {
    profile = `Name: ${allUsersArray[usersIndex].name}<br></br> Username: ${allUsersArray[usersIndex].username}<br></br> Rating: ${allUsersArray[usersIndex].rating}<br></br> Favorites: ${allUsersArray[usersIndex].favorites}<br></br> Visits: ${allUsersArray[usersIndex].visits}<br></br> Difficulty: ${allUsersArray[usersIndex].difficulty}<br></br> Terrain: ${allUsersArray[usersIndex].terrain}<br></br> Size: ${allUsersArray[usersIndex].size}<br></br> Created: ${allUsersArray[usersIndex].created}<br></br> Updated: ${allUsersArray[usersIndex].updated}<br></br> Coords: ${allUsersArray[usersIndex].coords}<br></br>`
    alertMsg.innerHTML = msg1;
    imprimirMsg1.innerHTML = profile;
    alertMsg.appendChild(imprimirMsg1);
    })
    }
//     )

// }
    else{
    console.log("falha ao encontrar nome de usuário")
    let msg2 = "Falha ao encontrar nome de usuário. Verifique se está escrito corretamente e tente novamente.";
    alertMsg.innerHTML = msg2; 
    }
};