const express = require('express');
//importanção da função router, já existente dentro do express
const connectSequelize = require('../database');
connectSequelize.sync({alter:true});
const userRouter = express.Router();


// const bodyParser = require('body-parser');
const { handleUserCreation } = require('./user_routes/user_create');
const { handleUserDeletion } = require('./user_routes/user_delete');
const { handleUserUpdate } = require('./user_routes/user_update');
// const { handleUserData } = require('./user_routes/user_data');


userRouter.use(express.json());

// Define HTTP routes
userRouter.get('/', (req, res) => {
    res.status(200).json({message: 'connection to root has been established.'});
});

userRouter.post('/users', handleUserCreation);

// userRouter.get('/users', handleUserData);

userRouter.delete('/users/:id', handleUserDeletion);

userRouter.put('/users/:id', handleUserUpdate);
    
module.exports = userRouter;