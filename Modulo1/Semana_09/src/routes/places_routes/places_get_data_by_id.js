const express = require('express');
const connectSequelize = require('../../database');
const Place = require('../../models/places_database')

connectSequelize.sync({alter:true});

async function handlePlacesDataById(req, res){
    try{
            const filterPlacesById = await Place.findOne(
            {
            where:
            {
                id: req.params.id
            }
            }
        )

        if(!filterPlacesById){
            res.status(404).json({message: "Place ID not found, please check the ID and try again."})
        }else{
            res.status(200).json(filterPlacesById);
        }


    }catch(error){
        console.log(error);
        res.status(500).json({mensagem:'Server internal error. Check the route and try again.'})
    }
}

module.exports = {handlePlacesDataById};