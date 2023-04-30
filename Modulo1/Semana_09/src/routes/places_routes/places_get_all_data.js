const express = require('express');
const connectSequelize = require('../../database');
const Place = require('../../models/places_database')

connectSequelize.sync({alter:true});

async function handlePlacesDataAll(req, res){
    try{
        const findAllPlaces = await Place.findAll();
           
        res.status(200).json(findAllPlaces);
        
        
    }catch(error){
        console.log(error);
        res.status(500).json({mensagem:'Server internal error. Check the route and try again.'})
    }
}

module.exports = {handlePlacesDataAll};