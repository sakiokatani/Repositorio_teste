const express = require('express');
//importanção da função router, já existente dentro do express
const router = express.Router();
// const bodyParser = require('body-parser');
const { handleUserCreation } = require('./user_routes/user_create');



router.use(express.json());


// Define HTTP routes
router.get('/', (req, res) => {
    res.status(200).json({message: 'connection to root has been established.'});
});

router.post('/user', handleUserCreation);
    
module.exports = router;