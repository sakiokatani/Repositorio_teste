const express = require('express');
const connectSequelize = require('../../database');
const User = require('../../models/user_database')

connectSequelize.sync({alter:true});


async function handleUserCreation(req, res){
    try {
        console.log("entrei no try");

        const userData ={
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        }
        
        if(!userData.name|| !userData.email || !userData.username || !userData.password){
            return res.status(401).json({message: 'Request not allowed. All fields are mandatory.'})
        }

        const filterUserByUsername= await User.findOne(
            {
                where:
                {   
                    username: req.body.username
                },
            },
        )
        if(userData.password.length < 8){
            return res.status(401).json({message: 'password must be 8 characters or longer'})
        }

        const filterUserByEmail= await User.findOne(
            {
                where:
                {   
                    email: req.body.email
                },
            },
        )
        

        if(filterUserByUsername !== null){
            return res.status(409).json({message: 'An account with this username already exists. Please enter a new username and try again.'});
        
        } else if(filterUserByEmail !== null){
            return res.status(409).json({message: 'An account with this e-mail already exists.'});
        
        } else{
            const newUser = await User.create(userData);
            console.log(newUser);
            res.status(201).json({message:`User created successfully with the username ${userData.username}`});
        }

       
        
        

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'User creation unsuccessful. Please check all data and try again.'});
    }
};

module.exports = { handleUserCreation }