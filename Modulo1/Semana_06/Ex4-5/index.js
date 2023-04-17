const express = require('express');
const app = express();

app.get('/:nome', (req, res)=>{
    console.log("Servidor online")
    let dados = req.params.nome;
    res.send(`Rota de API criada pela ${dados}`);
})

const dado = {
    name: "Saki",
    age: 31,
    ativo: true
}

app.post('/create', (req, res) =>{
    req.body;
    const jsonContent = JSON.stringify(dado);
    res.send(`Enviado com sucesso ${jsonContent}`);
    console.log(`Dado enviado com sucesso ${JSON.stringify(dado)}`)
});

app.listen(3003, () =>{
    console.log("Servidor Online")
});