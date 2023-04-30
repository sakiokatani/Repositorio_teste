const express = require('express');
const connectSequelize = require('../../database');
const Place = require('../../models/places_database')

connectSequelize.sync({alter:true});

async function handlePlacesUpdate(req, res){

    try{
        const placeInDatabase = await Place.findByPk(req.params.id);

        if(!placeInDatabase){
            return res.status(404).json({message: 'place not found'});
        }else{
            console.log("somethings wrong here")
        placeInDatabase.name = req.body.name;
        placeInDatabase.description = req.body.description;
        placeInDatabase.phone = req.body.phone;
        placeInDatabase.opening_hours = req.body.opening_hours;

        await placeInDatabase.save();
        res.json(placeInDatabase);
        }

    }catch(error){
        console.error(error);
        res.status(500).json({message: 'error updating data'})
    }
}

module.exports={handlePlacesUpdate};