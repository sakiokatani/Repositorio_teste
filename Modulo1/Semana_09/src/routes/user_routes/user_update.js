const express = require('express');
const connectSequelize = require('../../database');
const User = require('../../models/user_database')

connectSequelize.sync({alter:true});


async function handleUserUpdate(req, res){
try {
    const userData ={
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    const FilterUserInDataBase = await User.findByPk(req.params.id);
    
    //LEMBRETE: Terminar validações aqui para o put e criar a rota no user_routes
    
} catch (error) {
    
}
}