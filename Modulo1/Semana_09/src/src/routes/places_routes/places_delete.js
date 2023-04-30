const express = require('express');
const connectSequelize = require('../../database');
const Place = require('../../models/places_database')

connectSequelize.sync({alter:true});

async function handlePlacesDeletion(req, res){

    try{
        await Place.destroy(
            {
                where:{
                    id: req.params.id
                }
            }
        )
        res.status(200).json({message:'Place deleted successfully'});

    }catch(error){
        res.status(500).json({message: 'error deleting object'})
    }
}

module.exports = {handlePlacesDeletion};