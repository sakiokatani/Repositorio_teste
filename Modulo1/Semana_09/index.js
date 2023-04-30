const express = require('express');
const connectSequelize = require('./src/database');
    connectSequelize.sync({alter:true});
const Place = require('./src/models/places_database')
// const User = require('./src/models/user_database');
const userRouter = require('./src/routes/user_routes');
const placeRouter = require('./src/routes/places_routes');
const app = express();


app.use(express.json());
app.use('/', userRouter);
app.use('/', placeRouter);

app.listen(3000, () =>{
    console.log('Connection has been established successfully');
})