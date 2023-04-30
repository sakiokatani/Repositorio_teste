const express = require('express');
const connectSequelize = require('../../database');
const Place = require('../../models/places_database')

connectSequelize.sync({alter:true});

async function handlePlacesCreation(req, res){
    try{
        
        const data = { 
        name: req.body.name,
        phone: req.body.phone,
        opening_hours: req.body.opening_hours,
        description: req.body.description,
        latitude: req.body.latitude,
        longitude: req.body.longitude
        }
        console.log(data);

        if(!data.name){
            return res.status(401).json({mensagem: 'Name of the place is mandatory.'})
        }

        const filterDataByName = await Place.findOne(
            {
                where: {name: data.name}
            }
        );
        console.log(filterDataByName);

        if(filterDataByName === null){
            let newPlace = await Place.create(data);
            return res.status(201).json(newPlace)
        
        }else{
            
            return res.status(409).json({mensagem: 'Unauthorized post: either the place already exists or name of the place was not given'})
        }

    }catch(error){
        console.error(error)
        res.status(500).json({mensagem:'Server internal error. Check the route and try again.'})
    }
};

module.exports = {handlePlacesCreation};