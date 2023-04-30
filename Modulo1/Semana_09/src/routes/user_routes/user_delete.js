const express = require('express');
const connectSequelize = require('../../database');
const User = require('../../models/user_database')

connectSequelize.sync({alter:true});

async function handleUserDeletion(req,res){
    try {
        console.log('entered try');
        const findUserById = await User.findByPk(req.params.id);
        console.log(findUserById);

    if(findUserById === null){
        return res.status(404).json({mensagem: 'user not found'});
    }else if(findUserById !== null){


    await User.destroy(
        {
            where:
            {
                id: req.params.id
            },
        }
        
    )
    return res.status(204).json({mensagem: 'Usuário deletado com sucesso'});
    }
    } catch (error) {
        console.error(error)
        res.status(500). json({mensagem: 'Internal server error'});
    }
    
}

module.exports = {handleUserDeletion};