const express = require('express');
//importanção da função router, já existente dentro do express
const connectSequelize = require('../database');
        connectSequelize.sync({alter:true});
const placeRouter = express.Router();
        placeRouter.use(express.json());

const {handlePlacesCreation} = require('./places_routes/places_create');
const {handlePlacesDataAll} = require('./places_routes/places_get_all_data');
const {handlePlacesDataById} = require('./places_routes/places_get_data_by_id');
const {handlePlacesDeletion} = require('./places_routes/places_delete');
const {handlePlacesUpdate} = require('./places_routes/places_update');


placeRouter.get('/', (req, res) => {
        try{
            res.status(200).json({message: 'connection to root has been established.'});
        }catch(error){
            console.error(error);
            res.status(500).json({message: "Error connecting to the server"})
        }
    });
placeRouter.post('/places', handlePlacesCreation);

placeRouter.get('/places', handlePlacesDataAll);

placeRouter.get('/places/:id', handlePlacesDataById);

placeRouter.delete('/places/:id', handlePlacesDeletion);

placeRouter.put('/places/:id', handlePlacesUpdate);

module.exports = placeRouter;