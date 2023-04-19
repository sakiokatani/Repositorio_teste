const express = require('express');
//importanção da função router, já existente dentro do express
const router = express.Router();
// const bodyParser = require('body-parser');
const { handleUserCreation } = require('./user_routes/user_create');
const { handleUserDeletion } = require('./user_routes/user_delete');



router.use(express.json());


// Define HTTP routes
router.get('/', (req, res) => {
    res.status(200).json({message: 'connection to root has been established.'});
});

router.post('/users', handleUserCreation);

router.delete('/users/:id', handleUserDeletion);
    
module.exports = router;