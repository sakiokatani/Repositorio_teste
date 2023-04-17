const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user-controller')
// app.use(express.json()); 


router.get('/get-user-by-id/:id', userController.getUserById);

module.exports = router;