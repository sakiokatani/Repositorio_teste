const name = document.getElementById("name");

fetch(`https://api.github.com/users/sakiokatani`)
.then ((response) => response.json())
.then((data) =>{
    console.log(data)
    name.innerHTML = data.name
    bio.innerHTML = data.bio
    
})