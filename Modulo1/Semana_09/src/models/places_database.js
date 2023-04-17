const { Sequelize } = require('sequelize');
const connectSequelize = require('../database');

const Place = connectSequelize.define('places', {
    id:{ 
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name:{
        type: Sequelize.STRING,
        allowNull: false
    },

    phone:{
        type: Sequelize.INTEGER,
    },

    opening_hours:{
        type: Sequelize.STRING,
    },

    description:{
        type: Sequelize.STRING,
    },

    latitude:{
        type: Sequelize.DECIMAL,
    },

    longitude:{
        type: Sequelize.DECIMAL,
    },
})

module.exports= Place;