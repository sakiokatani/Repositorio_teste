const express = require('express');
const app = express();

const routers = require('./sources/routes/user-route');
const middleware = require('./middleware');

app.use(routers);
app.use(express.json()); 

app.get('/checkLeader', middleware.checkLeader);
app.get('/get-user-by-id/:id', (req, res)=>{
res.status(200).send('Servidor online por require');
appRoute();
});



// //criando o objeto
app.post('/create',    
 (req, res) =>{
    const object = req.body;
    
    if(req.body.user.age >= 21){
        res.status(200).json('Usuário criado com com sucesso:');
    }
    
    // verificando se foi enviado algo no corpo da requisição OU se idade é "Not a Number"
    if(Object.keys(req.body).length === 0 || Object.values(req.body).some(value => value === undefined || value === null)) {
        res.status(406).send({mensagem: "Está faltando dados para concluir a operação."})
    }

    else{
    res.status(403).json({mensagem: 'Usuário menor de 21 anos. Usuário não possui idade suficiente.'})
    }
}
)


app.delete('/delete/:id', (req, res) => {
    const id = req.params.id;
    if( req.body.user && req.body.user.id === id){
        res.status(200).json({mensagem:'Usuário deletado com sucesso'})
    }
    else{
        res.status(406).json({mensagem:'Está faltando dados para concluir a operação'})
    }
    res.send('DELETE request')
})




app.listen('3333', ()=>{
    console.log('Servidor online');
;})