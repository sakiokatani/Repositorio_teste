const express = require('express');
const connectSequelize = require('./src/database');
const Place = require('./src/models/places_database')

const app = express();
app.use(express.json());


connectSequelize.authenticate();
connectSequelize.sync({alter:true});

app.get('/', (req, res)=>{
    console.log('root connected');
    res.json({mensagem:'Root connection established.'})
})

app.post('/places', async(req, res) =>{
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
        console.log(error)
        res.status(500).json({mensagem:'Object creation unsuccessful'})
    }
});

app.get('/places', async(req, res)=>{
    try{
    const places = await Place.findAll();
    return res.json(places);
    }catch(error){
        console.log(error);
        res.status(500).json({message: 'error returning requisition'})
    }
})

app.delete('/places/:id', async(req,res)=>{
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
})

app.put('/places/:id', async(req,res)=>{
    try{
        const placeInDatabase = await Place.findByPK(req.params.id);
        if(!placeInDatabase){
            return res.status(404).json({message: 'place not found'});
        };
        placeInDatabase.name = req.body.name;
        placeInDatabase.description = req.body.description;
        placeInDatabase.phone = req.body.phone;
        placeInDatabase.opening_hours = req.body.opening_hours;

        await placeInDatabase.save();
        res.json(placeInDatabase);
    }catch(error){
        res.status(500).json({message: 'error updating data'})
    }
})






app.listen(3000, () =>{
    console.log('Connection has been established successfully');
})